export interface CalculatorInputs {
  currentCgpa: number;
  maxCgpa: number;
  minPassingCgpa: number;
}

export interface CalculatorResult {
  germanGrade: number;
  classification: GradeClassification;
  error?: string;
}

export type GradeClassification = "Excellent" | "Very Good" | "Good" | "Pass" | "Insufficient";

export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Modified Bavarian Formula:
 * German Grade = 1 + 3 × ((Max - Obtained) / (Max - MinPassing))
 */
export function calculateGermanGrade(inputs: CalculatorInputs): CalculatorResult {
  const { currentCgpa, maxCgpa, minPassingCgpa } = inputs;

  // Prevent division by zero
  const denominator = maxCgpa - minPassingCgpa;
  if (denominator === 0) {
    return {
      germanGrade: 0,
      classification: "Insufficient",
      error: "Maximum CGPA and Minimum Passing CGPA cannot be equal.",
    };
  }

  // Clamp: grade cannot exceed max or be below 0
  const clampedCgpa = Math.min(Math.max(currentCgpa, 0), maxCgpa);

  const germanGrade = 1 + 3 * ((maxCgpa - clampedCgpa) / denominator);

  // Round to 2 decimal places
  const rounded = Math.round(germanGrade * 100) / 100;

  // Cap between 1.0 and 4.0 per German grading bounds
  const clamped = Math.min(Math.max(rounded, 1.0), 5.0);

  return {
    germanGrade: clamped,
    classification: getClassification(clamped),
  };
}

export function getClassification(grade: number): GradeClassification {
  if (grade >= 1.0 && grade <= 1.5) return "Excellent";
  if (grade >= 1.6 && grade <= 2.5) return "Very Good";
  if (grade >= 2.6 && grade <= 3.5) return "Good";
  if (grade >= 3.6 && grade <= 4.0) return "Pass";
  return "Insufficient";
}

export function validateInputs(inputs: Partial<CalculatorInputs>): ValidationError[] {
  const errors: ValidationError[] = [];
  const { currentCgpa, maxCgpa, minPassingCgpa } = inputs;

  if (currentCgpa === undefined || currentCgpa === null || isNaN(currentCgpa)) {
    errors.push({ field: "currentCgpa", message: "Current CGPA is required." });
  } else if (currentCgpa < 0) {
    errors.push({ field: "currentCgpa", message: "CGPA cannot be negative." });
  }

  if (maxCgpa === undefined || maxCgpa === null || isNaN(maxCgpa)) {
    errors.push({ field: "maxCgpa", message: "Maximum CGPA is required." });
  } else if (maxCgpa <= 0) {
    errors.push({ field: "maxCgpa", message: "Maximum CGPA must be greater than 0." });
  }

  if (minPassingCgpa === undefined || minPassingCgpa === null || isNaN(minPassingCgpa)) {
    errors.push({ field: "minPassingCgpa", message: "Minimum passing CGPA is required." });
  } else if (minPassingCgpa < 0) {
    errors.push({ field: "minPassingCgpa", message: "Minimum passing CGPA cannot be negative." });
  }

  // Cross-field validations
  if (
    maxCgpa !== undefined &&
    minPassingCgpa !== undefined &&
    !isNaN(maxCgpa) &&
    !isNaN(minPassingCgpa) &&
    maxCgpa <= minPassingCgpa
  ) {
    errors.push({
      field: "minPassingCgpa",
      message: "Minimum passing CGPA must be less than Maximum CGPA.",
    });
  }

  if (
    currentCgpa !== undefined &&
    maxCgpa !== undefined &&
    !isNaN(currentCgpa) &&
    !isNaN(maxCgpa) &&
    currentCgpa > maxCgpa
  ) {
    errors.push({
      field: "currentCgpa",
      message: "Current CGPA cannot exceed Maximum CGPA.",
    });
  }

  return errors;
}

export function getClassificationColor(classification: GradeClassification): string {
  switch (classification) {
    case "Excellent":
      return "text-emerald-600 bg-emerald-50 border-emerald-200";
    case "Very Good":
      return "text-blue-600 bg-blue-50 border-blue-200";
    case "Good":
      return "text-amber-600 bg-amber-50 border-amber-200";
    case "Pass":
      return "text-orange-600 bg-orange-50 border-orange-200";
    default:
      return "text-red-600 bg-red-50 border-red-200";
  }
}
