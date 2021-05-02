import React from "react";
import { useFetch } from "./hooks/useFetch";


const App = () => {

  const [data, loading] = useFetch(
    "https://raw.githubusercontent.com/RaynyT/info_474_assignments/main/data/Education.csv"
  );

  return (
    <div>

      <h1>Rayna Tilley's Exploratory Data Analysis of US Education, Assignment 2, INFO 474 SP 2021</h1>
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
        To adress this question I created a visual that demonstrates how education became more important over time.
        I aggregated data containing the percentages of adults who obtained their high school diploma or higher and took the average of all counties in that state.
        I then displayed the visual with all states to compare them and understand if the increase in importance was a common result for each state or just a few.
      </p>

      <p style={{ marginBottom: "100px" }}>
        From the results, it is clear that education did become increasingly important over time. 
        One example is Georgia, in which in 1970 their high school graduation rate was 29.12% and in 2015-2019 it was 82.5%.
        All states are examples of this and most result in the 80% to 100% ranges for 2015-2019 compared to the 50% on average in 1970.
        This could be a result of farming, as it was more common that children stayed home from school to help their parents and families with farming during school seasons.
        Another reason could be that school in the 1970s were less about education and more advertised as a social location creating a less serious atmosphere.
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
      <p style={{ marginBottom: "100px" }}>
        As a WA resident I was curious how WA compared to the national averages. 
        Thus for this first visualization, I chose to display the same graph above but with only the US and WA.
        Interestingly, the US had a higher average graduation rate in 1970 than in 1980 and that trend then increased after 1980.
        This is a very interesting finding that shows that the national averages for 1980 may have been dragged down by some states.
        The trend remains positive for WA however and WA's average high school graduation rate was lower in 1970 but since then has been higher than the US's average by a healthy 5% lead.
        Thus, WA's average graduation rate has been consistently higher than the US average since 1980.
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
        For this graph, I was curious how WA's average percent of adults who sought futher education after high school compared to the US's.
        I combined data containing both the percent of adults who obtained some college or an associate's degree with adults who obtained their bachelor's degree or higher.
        I also displayed this throughout time because I was curious if college also became more popular over the years.
      </p>

      <p style={{ marginBottom: "100px" }}>
        On average, WA has 2-3% more adults that seek further education after high school.
        Additionally, we can see that as time went on, more adults on average are seeking some sort of college educaiton which indicates that as jobs developed, it is expected that college degrees accompany it.
        This can also indicate that college gives opportunities to higher paying jobs and could also be a reason that more adults sought further education.
        Additionally, this increase can indicate the increase in women attending college throughout time since it wasn't as expected for women to go to college 50ish years ago.
        One fact that surprised me however is that 39% of adults stop obtaining education after highschool which seems like a large percentage of the population.
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
        At the UW, I am working on my geography minor so I was curious if there were any geographic disparities when it comes to education in the US.
        For my first visual, I graphed the average percent of high school graduates for each state in 2015-2019 to understand if there is a graphical pattern.
      </p>

      <p style={{ marginBottom: "100px" }}>
        Interestingly, it is clear from the color gradient, that as you go more towards the South in the US, the graduation reates lessen.
        This is also indicative with Puerto Rico which has the lowest high school graduation rate ot of all US states and territories with a 73.72% in 201502-19.
        This means that about 26 percent of adults in Puerto Rick have not graduated from high school in 2015-2019 which is shocking to me.
        This shows that impoverished countries and natural disasters impact education since in Puerto Rico there are many destructive hurricanes.
        Thus there are geographic disparities when it comes to high school graduation rates.
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
        For this next visual I wanted to understand how many adults actually attended college and graduated with a bachelor's degree or higher.
        To do this, I aggregated the percent of adults who graduated from a university over the amount of adults who obtained some college or higher.
      </p>

      <p style={{ marginBottom: "100px" }}>
        These results wore shocking. Interestingly, there isn't too much of a graphical relation to this question but around 40% of adults who attended college acrtually graduate with a bachelor's degree or higher.
        This, to me, is a very low percentage where WA 42.12. This is astounding that only around 40% of adults who sought these opportunities actually obtain them.
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
        For my last visualization that addressees geographical disparities, I was curious if I could find the locations in which most of the four year university graduates reside or find jobs.
        To do this, I graphed the total number of four year university graduates in each state.
      </p>

      <p style={{ marginBottom: "100px" }}>
        From this visualization, I found that most university graduates reside in California with a total of nearly 18 million.
        This makes sense given California's population and the abundance of tech companies.
        Texas, New York and then Florida follow suit due to population as well but also due to the numerous large cities.
        It would be worth while to do this graph with cities instead to understand the distribution that way.
        From there I believe we would see a graphical representation of urbanization in the US in which big cities are where most of the jobs are located.
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
        As I graphed all of these visualizations and different formations of data I was curious as to the distribution of education levels during 2015-2019.
        I created a stacked bar chart of the percent distribution for each level to obtain this information and answer my question.
      </p>

      <p style={{ marginBottom: "100px" }}>
        From this chart, we can see that DC has the highest percentage of university graduates out of all states and territories in the US which is interesting and could be representative of our government requiring a college educaiton.
        The next element my eye gravitates towards is the highest percentage of adults who have not obtained their high school diploma which again, like in previous visualizations, is Puerto Rico.
        After Puerto Rico, it seems that Southern states have the next highest percentage of adults who do not obtain a high school diploma.
        This graph is key in understanding the make up of each state and how they compare.
        For WA, the distribution is as follows:
        <ul>
            <li>Less than High School Diploma: 10.88%</li>
            <li>High School Diploma: 26.03%</li>
            <li>Some College / Associate's Degree: 35.91%</li>
            <li> University Graduate: 27.20%</li>
        </ul>
        This shows that WA's most abundant educational level is some college or an associate's degree for 2015-2019.
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
        For my last question, I understood that geographic location had a relationship with high school graduation but I also wanted to see if population was a factor as well.
        In order to do this, I created a visual that used the size as the total number of adults who graduated from highschool and the color as the average percent of adults who graduated from college for each state.
      </p>

      <p style={{ marginBottom: "100px" }}>
        As I investigated this visual, I noticed that the the state with the highest average percent of high school graduates was WY with a 92.85% and a total number of graduates equal to 727,656 adults.
        Puerto Rico again has the lowest average percent of high school graduates with a 73.72%.
        It is unclear if these two variables are related, but the visual representation is quite interesting to ponder.
        In a way, this makes sense because with less people, it is more likely that the average percent of graduates is higher because education may be more tailored and a smaller amount of students is easier to education and focus on.
        This is just speculation however, and there may be other confounding variables that have a better relationship and explanation.
      </p>

      <h3><b><i>Lessons Learned</i></b></h3>
      <p style={{ marginBottom: "100px" }}>
        The main lessons that I learned from this assignment are that interacting and experimenting with the data is the best way to find interesting visualizations and shocking information.
        By spending more time on understanding my data I was able to create interesting visuals that displayed intersting narratives.
        Additionally, it is important to understand the aggregated data created because as I went through this assignment, I found myself getting confused and needing to check each variable to ensure that its aggregation made sense.
        For instance, at one point I was adding percentages for each county within the state which ended in a total that didn't make sense.
      </p>
    </div>
  );
};

export default App;