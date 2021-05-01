import React from "react";
import { useFetch } from "./hooks/useFetch";


const App = () => {

  const [data, loading] = useFetch(
    "https://raw.githubusercontent.com/RaynyT/info_474_assignments/main/data/Education.csv"
  );

  return (
    <div>

      <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
      <h2>The data I chose comes from the <a href="https://www.ers.usda.gov/data-products/county-level-data-sets/download-data/">USDA Economic Research Service</a></h2>
      <p>The files I chose are:
          <ul>
            <li>Educational attainment for the U.S., States, and counties, 1970-2019 (Education.csv)</li>
            <li>Poverty estimates for the U.S, States, and Counties, 2019 (PovertyEstimates.csv)</li>
            <li>Unemployment and mediam household income for the U.S., States, and counties, 2000-19 (Unemployment.csv)</li>
            <li>Population estimates for the U.S., States, and counties, 2010-19 (PopulationEstimates.csv)</li>
          </ul>
      </p>

      <h2>Question 1. How have education rates evolved over time?</h2>

      <h3>Importance of Education</h3>
        <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
            <foreignObject width="100%" height="100%">
            <iframe src="https://public.tableau.com/views/ImportanceOfEducation/Sheet1?:language=en&:display_count=y&:origin=viz_share_link"
            width="955" height="955"></iframe>
            </foreignObject>
        </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
        
      </p>

      <p style={{ marginBottom: "100px" }}>
        
      </p>

      <h2>Question 2. How do educational rates compare between Washington and the United States as a whole over time?</h2>

      <h3>US National Graduation Rate VS. WA Graduation Rate Averages Over Time</h3>
        <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
            <foreignObject width="100%" height="100%">
            <iframe src="https://public.tableau.com/views/USNationalGraduationRateVS_WAGraduationRateAveragesOverTime/Sheet7?:language=en&:display_count=y&:origin=viz_share_link"
            width="955" height="955"></iframe>
            </foreignObject>
        </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
        
      </p>

      <p style={{ marginBottom: "100px" }}>
        
      </p>

      <h3>Further Education</h3>
        <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
            <foreignObject width="100%" height="100%">
            <iframe src="https://public.tableau.com/views/FurtherEducation_16198622541920/Sheet3?:language=en&:display_count=y&:origin=viz_share_link"
            width="955" height="955"></iframe>
            </foreignObject>
        </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
        
      </p>

      <p style={{ marginBottom: "100px" }}>
        
      </p>
      
      <h2>Question 3. Are there geographical disparities in education acroos the US?</h2>

      <h3>HS Graduation Rate Per State in US</h3>
        <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
            <foreignObject width="100%" height="100%">
            <iframe src="https://public.tableau.com/views/HSGraduationRatePerStateinUS/Sheet4?:language=en&:display_count=y&:origin=viz_share_link"
            width="955" height="955"></iframe>
            </foreignObject>
        </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
        
      </p>

      <p style={{ marginBottom: "100px" }}>
        
      </p>
      
      <h3>The Percentage of Adults Who Have Attended College and Graduated</h3>
        <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
            <foreignObject width="100%" height="100%">
            <iframe src="https://public.tableau.com/views/ThePercentageofAdultsWhoHaveAttendedCollegeandGraduated/Sheet8?:language=en&:display_count=y&:origin=viz_share_link"
            width="955" height="955"></iframe>
            </foreignObject>
        </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
        
      </p>

      <p style={{ marginBottom: "100px" }}>
        
      </p>

      <h3>Distribution of Adults with Bachelor's or Higher Degrees</h3>
        <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
            <foreignObject width="100%" height="100%">
            <iframe src="https://public.tableau.com/views/DistributionofAdultswithBachelorsorHigherDegrees/Sheet9?:language=en&:display_count=y&:origin=viz_share_link"
            width="955" height="955"></iframe>
            </foreignObject>
        </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
        
      </p>

      <p style={{ marginBottom: "100px" }}>
        
      </p>

      <h2>Question 4. What does the distribution of education levels look like?</h2>

      <h3>Education Level Percent Distribution Per State in the US</h3>
        <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
            <foreignObject width="100%" height="100%">
            <iframe src="https://public.tableau.com/views/EducationLevelPercentDistributionPerStateintheUS/Sheet5?:language=en&:display_count=y&:origin=viz_share_link"
            width="955" height="955"></iframe>
            </foreignObject>
        </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
        
      </p>

      <p style={{ marginBottom: "100px" }}>
        
      </p>

      <h2>Question 5. Does population have an impact on educational levels?</h2>

      <h3>Percent of HS Graduates VS. State Population</h3>
        <svg width="955" height="955" style={{ border: "1px solid black", marginBottom: "25px" }}>
            <foreignObject width="100%" height="100%">
            <iframe src="https://public.tableau.com/views/PercentofHSGraduatesVS_StatePopulation/Sheet6?:language=en&:display_count=y&:origin=viz_share_link"
            width="955" height="955"></iframe>
            </foreignObject>
        </svg>

      <h3><b><i>Insights</i></b></h3>
      <p>
        
      </p>

      <p style={{ marginBottom: "100px" }}>
        
      </p>
    </div>
  );
};

export default App;