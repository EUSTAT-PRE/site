---
title: Measuring progress on the Sustainable Development Goals
language: en
permalink: /en/metodologia/
layout: page
---



## 1. Progress assessment 

Measuring and tracking progress using reliable data is essential to understanding how the Basque Country is advancing towards the achievement of the SDGs. 

Closely monitoring the progress of each indicator reveals where progress is being made and where efforts should be focused. Furthermore, it enables open and transparent 
reporting on the implementation of the 2030 Agenda and supports the design and adjustment of effective, evidence-based policies, thereby helping to achieve the Goals.

Various organizations have developed methodologies to measure progress on SDG indicators. In order to ensure a transparent, clear, and comparable assessment, Eustat has developed a methodology based primarily 
on the one used by [Eurostat to measure progress on the European Union’s SDG indicators](https://ec.europa.eu/eurostat/documents/d/sdi/eu-dg-assessment-approach-2026-06-03), incorporating elements from 
[INE’s methodology](https://ine.es/ods/medicion_ods_2025.pdf), along with specific modifications to adapt the assessment to the reality of the Basque Autonomous Community.

The assessment method considers whether an indicator has progressed towards or moved away from the target set in the 2030 Agenda, as well as the speed of this movement. The method focuses on progress over time and not on the current status.

For some indicators, the 2030 Agenda established global quantitative targets to be achieved by 2030. In these cases, the target has been adopted to measure progress on the indicator within the Basque Autonomous Community.

In other cases, the Agenda does not specify a numerical target, but it does indicate the normative direction —that is, the desirable trend for the indicator's value. When the normative direction is "Increase", it is desirable for the 
indicator value to rise; when the normative direction is "Decrease", it is desirable for the indicator value to decline. The normative direction for each indicator has been drawn from the [2026 Technical Note for Progress Assessment 
by the United Nations Statistics Division](https://unstats.un.org/sdgs/files/report/2026/Technical_Note_for_Progress_Assessment_2026.pdf).

Disaggregations of indicators or sub-indicators (sex, age, territory, etc.) are not taken into account when measuring progress; only aggregate data are used.

## 2. Progress categories

<style type="text/css">
  .aurrerapen-kategoriak {
    width: 850px;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #333;
  }

  .aurrerapen-kategoriak th {
    background-color: #d9e2f3;
    color: #000;
    font-weight: bold;
    text-align: left;
    padding: 7px 10px;
  }

  .aurrerapen-kategoriak th:first-child {
    text-align: center;
    width: 15%;
  }

  .aurrerapen-kategoriak th:nth-child(2) {
    width: 42.5%;
  }

  .aurrerapen-kategoriak th:nth-child(3) {
    width: 42.5%;
  }

  .aurrerapen-kategoriak td {
    padding: 5px 10px;
    border-bottom: 1px solid #ddd;
    vertical-align: middle;
  }

  .aurrerapen-kategoriak td:first-child {
    text-align: center;
  }

  .aurrerapen-kategoriak img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
</style>


<table class="aurrerapen-kategoriak">

  <thead>
    <tr>
      <th>Symbol</th>
      <th>With quantitative target</th>
      <th>Without quantitative target</th>
    </tr>
  </thead>

  <tbody>

    <tr>
      <td>
        <img src="{{site.baseurl}}/assets/img/progress/alcanzado.png" alt="Significant progress">
      </td>
      <td>
        Target met or on track. The target has been reached, or —if progress continues as it has so far— it will be reached by 2030. 
      </td>
      <td>
        Significant progress. Significant progress made in the desired direction.
      </td>
    </tr>

    <tr>
      <td>
        <img src="{{site.baseurl}}/assets/img/progress/en_progreso.png" alt="Moderate progress">
      </td>
      <td>
        Moderate progress towards the target. It is approaching the target, but some acceleration is needed in order to reach it by 2030.
      </td>
      <td>
        Moderate progress. Moderate progress made in the desired direction.
      </td>
    </tr>

    <tr>
      <td>
        <img src="{{site.baseurl}}/assets/img/progress/sin_progreso.png" alt="Stagnation">
      </td>
      <td>
        [Category not applicable]
      </td>
      <td>
        Stagnation. No progress nor deterioration.
      </td>
    </tr>

    <tr>
      <td>
        <img src="{{site.baseurl}}/assets/img/progress/retroceso.png" alt="Moderate deterioration">
      </td>
      <td>
        Insufficient progress towards the target. Progress made towards the target, but significant acceleration required to reach it by 2030.
      </td>
      <td>
        Moderate deterioration. Moderately moving in the direction opposite to the desired one.
      </td>
    </tr>

    <tr>
      <td>
        <img src="{{site.baseurl}}/assets/img/progress/retroceso_significativo.png" alt="Significant deterioration">
      </td>
      <td>
        Movement away from target. Getting further away from the target.  
      </td>
      <td>
        Significant deterioration. Significantly moving in the direction opposite to the desired one.
      </td>
    </tr>

    <tr>
      <td>
        <img src="{{site.baseurl}}/assets/img/progress/no_evaluable.png" alt="Not evaluable">
      </td>
      <td colspan="2">
        Not evaluable. Progress cannot be reliably assessed because there is insufficient data, the desired direction is unclear, or for other reasons.<br>
      </td>
    </tr>
    <tr>
      <td>
        <img src="{{site.baseurl}}/assets/img/progress/sin_datos_disponibles.png" alt="No data available">
      </td>
      <td colspan="2">
        No data available. There is currently no data for this indicator, but various sources are being analyzed in order to provide data soon.<br>
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


## 3. Assessment of progress at indicator level

The methods for assessing progress differ between indicators or sub-indicators that have a numerical target for 2030 and those that do not. Furthermore, for indicators composed of more than one sub-indicator, an additional calculation is performed in order to assess progress.


### 3.1 Indicators without quantitative targets

When there is no quantitative target, the assessment is based on whether the indicator is moving in the desired direction or in the opposite direction, and at what pace.

For this purpose, the compound annual growth rate (CAGR) is used. Using the value for the base year (typically 2015) and the most recent available figure, the annual growth rate over that period is calculated (expressed as a percentage).

$$CAGR_{a} = \left( \frac{v_{t}}{v_{b}} \right)^{\frac{1}{t-b}} - 1$$

Where: 𝑏 = base year (typically 2015), 𝑡 = last year with available data (for example 2026), 𝑣𝑏 = value in base year 𝑏, 𝑣𝑡 = value in last year 𝑡

Then, the calculated $$CAGRa$$ is adjusted according to the desired direction of the indicator:

- If the desired direction is "Decrease"

$$CAGR_{z} = CAGR_{a} * (-1)$$

- If the desired direction is "Increase"

$$CAGR_{z} = CAGR_{a}$$

Finally, the adjusted compound annual growth rate is evaluated according to the following intervals:

<style type="text/css">
  .tarteak {
    width: 550px;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #333;
  }

  .tarteak th {
    background-color: #d9e2f3;
    color: #000;
    font-weight: bold;
    text-align: left;
    padding: 7px 10px;
    border: 1px solid #bfbfbf;
  }

  .tarteak td {
    padding: 7px 10px;
    border: 1px solid #bfbfbf;
  }

  .tarteak th:first-child,
  .tarteak td:first-child {
    text-align: center;
    width: 35%;
  }

  .tarteak th:nth-child(2),
  .tarteak td:nth-child(2) {
    width: 65%;
  }
</style>

<table class="tarteak">
  <thead>
    <tr>
      <th>\(CAGR_{z}\)</th>
      <th>Progress category</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>≥ % 1</td>
      <td>Significant progress</td>
    </tr>
    <tr>
      <td>&lt; % 1 and &gt; % 0.1</td>
      <td>Moderate progress</td>
    </tr>
    <tr>
      <td>≤ % 0.1 and ≥ % −0.1</td>
      <td>Stagnation</td>
    </tr>
    <tr>
      <td>&lt; % −0.1 and &gt; % −1</td>
      <td>Moderate deterioration</td>
    </tr>
    <tr>
      <td>≤ % −1</td>
      <td>Significant deterioration</td>
    </tr>
  </tbody>
</table>

<br>
<br>

### 3.2 Indicators with quantitative targets

In cases where a quantitative target exists, the observed progress of the indicator is compared with the progress required to reach that target.

Three steps are followed:

- Calculation of the compound annual growth rate (see formula in section 3.1)

- Calculation of the growth rate required to achieve the target:

$$CAGR_{r} = \left( \frac{x_{z}}{v_{b}} \right)^{\frac{1}{z-b}} - 1$$

Where: 𝑏 = base year (typically 2015), 𝑧 = target year (typically 2030), 𝑣𝑏 = base value in year 𝑏, 𝑥 = target value in target year


- Calculation of the ratio between the observed growth rate and the required growth rate:

$$R = \frac{CAGR_{a}}{CAGR_{r}}$$

Next, the ratio is evaluated according to the following intervals:

<table class="tarteak">
  <thead>
    <tr>
      <th>\(R\)</th>
      <th>Progress category</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>≥ % 95</td>
      <td>Target met or on track</td>
    </tr>
    <tr>
      <td>&lt; % 95 and ≥ % 60</td>
      <td>Moderate progress towards target</td>
    </tr>
    <tr>
      <td>&lt; % 60 and ≥ % 0</td>
      <td>Insufficient progress towards target</td>
    </tr>
    <tr>
      <td>&lt; % 0</td>
      <td>Movement away from target</td>
    </tr>
  </tbody>
</table>
<br>
<br>

### 3.3 Indicators composed of several sub-indicators

In some cases, an indicator comprises several sub-indicators at the same level, with no single sub-indicator 
being predominant. In such instances, the progress of the indicator is evaluated by taking the mean 
of the progress of all its constituent sub-indicators. To calculate this mean, the following scoring 
functions are used, which convert the progress values ​​of the sub-indicators (growth rate or ratio) into 
scores ranging from −5 to +5:

Sub-indicators without quantitative targets
<style type="text/css">
  .puntuazioa {
    width: 450px;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #333;
  }

  .puntuazioa th {
    background-color: #d9e2f3;
    color: #000;
    font-weight: bold;
    text-align: left;
    padding: 7px 10px;
    border: 1px solid #bfbfbf;
  }

  .puntuazioa td {
    padding: 7px 10px;
    border: 1px solid #bfbfbf;
  }

  .puntuazioa th:first-child,
  .puntuazioa td:first-child {
    text-align: center;
    width: 50%;
  }

  .puntuazioa th:nth-child(2),
  .puntuazioa td:nth-child(2) {
    width: 50%;
  }
</style>

<table class="puntuazioa">
  <thead>
    <tr>
      <th>\(CAGR_{z}\)</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>≥ % 2</td>
      <td>5</td>
    </tr>
    <tr>
      <td>&lt; % 2 and &gt; % −2 </td>
      <td>\(CAGR_{z}\) * 2.5</td>
    </tr>
    <tr>
      <td>≤ % −2</td>
      <td>−5</td>
    </tr>
  </tbody>
</table>
<br>
Sub-indicators with quantitative targets
<table class="puntuazioa">
  <thead>
    <tr>
      <th>\(R\)</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>≥ % 130</td>
      <td>5</td>
    </tr>
    <tr>
      <td>&lt; % 130 and ≥ % 60</td>
      <td>0.0714 * (\(R\) - 60)</td>
    </tr>
    <tr>
      <td>&lt; % 60 and &gt; % −60</td>
      <td>0.0416 * (\(R\) + 60)</td>
    </tr>
    <tr>
      <td>≤ % −60</td>
      <td>−5</td>
    </tr>
  </tbody>
</table>
<br>
Once the progress of all sub-indicators has been measured using a score between −5 and +5, their arithmetic mean is calculated, assigning equal weight to all sub-indicators.

Finally, the progress category corresponding to the mean score is assigned, in accordance with the following intervals:

<table class="tarteak">
  <thead>
    <tr>
      <th>Mean score</th>
      <th>Progress category</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>&gt; 2.5</td>
      <td>Significant progress</td>
    </tr>
    <tr>
      <td>≤ 2.5 and &gt; 0.25</td>
      <td>Moderate progress</td>
    </tr>
    <tr>
      <td>≤ 0.25 and ≥ −0.25</td>
      <td>Stagnation</td>
    </tr>
    <tr>
      <td>&lt; −0.25 and ≥ -2.5</td>
      <td>Moderate deterioration</td>
    </tr>
    <tr>
      <td>&lt; −2.5</td>
      <td>Significant deterioration</td>
    </tr>
  </tbody>
</table>
<br>
<br>

### 3.4 Considerations and exceptions 

Owing to the nature of the data, a number of considerations and exceptions have been defined: 

- When the value of the last year meets the target, the target is considered to have been reached, regardless of the trend in recent years.

- When the value of the last year is close (maximum difference of 0.1%) to 0% or 100%, this being the objective, it is considered that the target has been reached. 

- In some cases, indicators have natural maximum or minimum limits (for example, indicator 9.c.1, the proportion of the population covered by a mobile network, cannot exceed 100%). If the indicator value 
in the base year is very close to this limit, it may be impossible to achieve the growth rate required for the "Significant progress" category. In such cases, a scaling factor is used to 
adjust the growth rate thresholds for each category.

- When data for 2015 are unavailable, the first available year—either following or preceding 2015—is used as the base year.  

- In the absence of a specified target date, 2030 is assumed to be the target period.

- Binary indicators can only take two possible values (Yes/No) ​​(for example, 17.18.2: The legislation on statistics complies with the Fundamental Principles of Official Statistics).
These indicators will be assigned one of the following progress categories: if the answer is "Yes," "Target met or on track"; if the answer is "No," "Movement away from target".

- For some indicators, reaching the target is desirable, but exceeding it can have negative consequences. For example, regarding the parity indices for indicator 4.5.1, the target is to achieve 
the highest possible level of parity (index = 1); deviations above or below this target would be equally undesirable. In such cases, the assessment of progress takes into account deviations 
from the ideal, in either direction. These include indicators 4.5.1, 5.4.1, 5.5.1, 5.a.1, 16.6.1, and 16.7.1.

- Progress estimates inevitably simplify reality. Progress needs to be contextualized with other relevant information.  

- It takes time for data to reflect the impact of policies; the longer the time series, the better the methodology for measuring progress.  

## 4. Assessment of progress at target and goal level 

The following considerations are taken into account when assessing progress at the target level:

- When all indicators for a target have "Data not available" status, that same status is assigned to the target.

- When all indicators for a target have "Not applicable" status, that same status is assigned to the target.

- If the latest available data for an indicator is from 2020 or earlier, that indicator is not taken into account when assessing progress at target level.

- If less than 50% of the indicators for a target have had their progress assessed, it is considered that there is insufficient information to assess progress towards the target; therefore, it is assigned the category "Not evaluable."

Progress at target level is determined by the arithmetic mean of the progress of the indicators that comprise each target. The procedure followed for this is the same as that used to calculate progress for indicators that consist of 
more than one sub-indicator (see section 3.3). A scoring function is applied to transform the progress value of each indicator into a score between −5 and +5; the mean of these scores is then calculated to get 
the progress score for the target. The intervals used to assign a progress category are the same as those used for indicators composed of multiple sub-indicators.

Likewise, to assess progress at goal level, the arithmetic mean of the targets' progress score is calculated, using the same methodology applied to indicators with multiple sub-indicators and to the targets themselves (see section 3.3).

