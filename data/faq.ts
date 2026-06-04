export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What is a good German grade?",
    answer:
      "In the German grading system, 1.0 is the best grade and 4.0 is the minimum passing grade. A grade of 1.0–1.5 is considered Excellent (sehr gut), 1.6–2.5 is Very Good (gut), 2.6–3.5 is Good (befriedigend), and 3.6–4.0 is a Pass (ausreichend). For competitive master's programs, a German grade of 2.5 or better (i.e., a lower number) is generally preferred.",
  },
  {
    question: "Is 2.5 a good German grade?",
    answer:
      "Yes, a German grade of 2.5 falls in the 'Very Good' category and is considered competitive for most German university master's programs. Many universities set their admission threshold around 2.5 or better. However, highly ranked universities or competitive programs may require 2.0 or better.",
  },
  {
    question: "How does Uni Assist calculate grades?",
    answer:
      "Uni Assist uses the Modified Bavarian Formula to convert international grades into the German grading system. The formula is: German Grade = 1 + 3 × ((Maximum Grade − Obtained Grade) / (Maximum Grade − Minimum Passing Grade)). Uni Assist verifies your documents and calculates a VPD (Vorprüfungsdokumentation) that German universities use to evaluate your application.",
  },
  {
    question: "What is VPD?",
    answer:
      "VPD stands for Vorprüfungsdokumentation, which translates to 'preliminary examination documentation.' It is a document issued by Uni Assist that verifies your foreign academic credentials and converts your grades into the German grading scale. Many German universities require a VPD for international applicants instead of reviewing original documents themselves.",
  },
  {
    question: "Does every German university require VPD?",
    answer:
      "No, not all German universities require a VPD. Universities that are members of Uni Assist require you to apply through Uni Assist and obtain a VPD. However, some universities—particularly technical universities like TU Munich or RWTH Aachen—may have their own application portals and review documents directly. Always check the specific requirements of each university you apply to.",
  },
  {
    question: "How can Bangladeshi students convert their CGPA?",
    answer:
      "Bangladeshi students can use the Modified Bavarian Formula to convert their CGPA. Most Bangladeshi universities use a 4.00 scale with a minimum passing CGPA of 2.00. Simply enter your CGPA, maximum CGPA (4.00), and minimum passing CGPA (2.00) into our calculator above. The result is your equivalent German grade, which you can use to assess your eligibility for German university programs.",
  },
];
