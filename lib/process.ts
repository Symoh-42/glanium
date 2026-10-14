export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const fabricationTimeline: ProcessStep[] = [
  { number: "01", title: "Consultation", description: "We discuss your project, requirements and vision." },
  { number: "02", title: "Measurement", description: "We confirm on-site dimensions and installation requirements." },
  { number: "03", title: "Design", description: "We develop a fabrication solution suited to your building." },
  { number: "04", title: "Fabrication", description: "Components are manufactured with attention to accuracy and finish." },
  { number: "05", title: "Finishing", description: "The selected finishing treatment is applied." },
  { number: "06", title: "Installation", description: "The completed work is delivered and installed on site." },
];

export const engineeringProcess: ProcessStep[] = [
  { number: "01", title: "Understand", description: "Understand the building, design requirements and intended use." },
  { number: "02", title: "Measure", description: "Confirm dimensions and installation requirements." },
  { number: "03", title: "Design", description: "Develop the appropriate fabrication solution." },
  { number: "04", title: "Fabricate", description: "Manufacture components with attention to accuracy and finish." },
  { number: "05", title: "Finish", description: "Apply the selected finishing treatment." },
  { number: "06", title: "Install", description: "Deliver and install the completed work." },
  { number: "07", title: "Inspect", description: "Review the completed installation." },
];

export const gateDesignProcess: ProcessStep[] = [
  { number: "01", title: "Measure", description: "Confirm entrance dimensions and site conditions." },
  { number: "02", title: "Design", description: "Develop a gate design suited to the property." },
  { number: "03", title: "Fabricate", description: "Manufacture the gate to the confirmed design." },
  { number: "04", title: "Finish", description: "Apply the selected powder-coated finish." },
  { number: "05", title: "Install", description: "Install and test the completed gate on site." },
];
