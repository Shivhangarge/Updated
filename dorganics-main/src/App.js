import { useNavigate } from 'react-router-dom';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import TermsAndConditions from './components/TermsAndConditions';
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from './components/PrivacyPolicy';
import WeightLossPlan from './components/Women/WeightLossPlan';
import MenWeightLoss from './components/Men/MenWeightLoss';
import GoalPage from './components/Goalpage';
import MenGoalPage from './components/Men/MenGoalPage'
import BodyTypeSelection from './components/Women/BodyTypeSelection';
import MenBodyTypeSelection from './components/Men/MenBodyTypeSelection';
import FeBodyTypeChooser from './components/Women/FeBodyTypeChooser';
import MaBodyTypeChooser from './components/Men/MaBodyTypeChooser';
import FeAreaImprove from './components/Women/FeAreaImprove';
import MaAreaImprove from './components/Men/MaAreaImprove';
import DailyRoutinePage from './components/DailyRoutinePage';
import BodyConfidenceLog from './components/BodyConfidenceLog';
import ExerciseQuiz from './components/ExerciseQuiz';
import DayTiredQuiz from './components/DayTiredQuiz';
import UsersPage from './components/UsersPage';
import HeightInput from './components/HeightInput';
import WeightInput from './components/WeightInput';
import DesiredInput from './components/DesiredInput';
import AgeInput from './components/AgeInput';
import PeakPerformance from './components/PeakPerformance';
import Checkboxone from './components/Checkboxone';
import SleepQuiz from './components/SleepQuiz';
import WaterQuiz from './components/WaterQuiz';
import MeatsPage from './components/MeatsPage';
import FoodPage from './components/FoodPage';
import Occasion from './components/Occasion';
import Event from './components/Event';
import ResultFirst from './components/ResultFirst';
import DetailsForm from './components/DetailsForm';
import FeSummary from './components/Women/FeSummary';
import ResultSe from './components/ResultSe';
import MaAgeInput from './components/Men/MaAgeInput';
import MaPeakPerformance from './components/Men/MaPeakPerformance';
import MaDailyRoutinePage from './components/Men/MaDailyRoutinePage';
import MaBodyConfidenceLog from './components/Men/MaBodyConfidenceLog';
import MaExercise from './components/Men/MaExercise';
import MaDayTiredQuiz from './components/Men/MaDayTiredQuiz';
import MaUsersPage from './components/Men/MaUsersPage';
import MaHeightInput from './components/Men/MaHeightInput';
import MaWeightInput from './components/Men/MaWeightInput';
import MaDesiredInput from './components/Men/MaDesiredInput';
import MaCheckboxone from './components/Men/MaCheckboxone';
import MaSleepQuiz from './components/Men/MaSleepQuiz';
import MaWaterQuiz from './components/Men/MaWaterQuiz';
import MaMeatsPage from './components/Men/MaMeatsPage';
import MaFoodPage from './components/Men/MaFoodPage';
import MaOccasion from './components/Men/MaOccasion';
import MaEvent from './components/Men/MaEvent';
import MaResultFirst from './components/Men/MaResultFirst';
import MaDetailsForm from './components/Men/MaDetailsform';
import MaSummary from './components/Men/MaSummary';
import PaymentSuccess from './components/PaymentSuccess';
import PaymentFailed from './components/PaymentFailed';






const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);
  return null;
};

  const App = () => {
  return (

    <Router>
      <ScrollToTop /> 
      {<Navbar/>}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Contactus" element={<ContactUs />} />  
        <Route exact path='/TermsAndConditions' element={<TermsAndConditions/>}/>
        <Route exact path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route exact path='/WeightLossPlan' element={<WeightLossPlan/>}/> 
        <Route exact path='/MenWeightLoss' element={<MenWeightLoss/>}/>
        <Route exact path='/GoalPage' element={<GoalPage/>}/>
        <Route exact path='/MenGoalPage' element={<MenGoalPage/>}/>
        <Route exact path='/BodyTypeSelection' element={<BodyTypeSelection/>}/>
        <Route exact path='/MenBodyTypeSelection' element={<MenBodyTypeSelection/>}/>
        <Route exact path='FeBodyTypeChooser' element={<FeBodyTypeChooser/>}/>
        <Route exact path='/MaBodyTypeChooser' element={<MaBodyTypeChooser/>}/>
        <Route exact path='/FeAreaImprove' element={<FeAreaImprove/>}/>
        <Route exact path='/MaAreaImprove' element={<MaAreaImprove/>}/>
        <Route exact path='/DailyRoutinePage' element={<DailyRoutinePage/>}/>
        <Route exact path='/BodyConfidenceLog' element={<BodyConfidenceLog/>}/>
        <Route exact path='/ExerciseQuiz' element={<ExerciseQuiz/>}/>
        <Route exact path='/DayTiredQuiz' element={<DayTiredQuiz/>}/>  
        <Route exact path='/UsersPage' element={<UsersPage/>}/>  
        <Route exact path='/HeightInput' element={<HeightInput/>}/> 
        <Route exact path='/WeightInput' element={<WeightInput/>}/> 
        <Route exact path='/DesiredInput' element={<DesiredInput/>}/> 
        <Route exact path='/AgeInput' element={<AgeInput/>}/> 
        <Route exact path='/PeakPerformance' element={<PeakPerformance/>}/>
        <Route exact path='/checkboxone' element={<Checkboxone/>}/> 
        <Route exact path='/SleepQuiz' element={<SleepQuiz/>}/> 
        <Route exact path='/WaterQuiz' element={<WaterQuiz/>}/>
        <Route exact path='/MeatsPage' element={<MeatsPage/>}/>
        <Route exact path='/FoodPage' element={<FoodPage/>}/>
        <Route exact path='/Occasion' element={<Occasion/>}/>
        <Route exact path='/Event' element={<Event/>}/>
        <Route exact path='/Resultfirst' element={<ResultFirst/>}/>
        <Route exact path='/DetailsForm' element={<DetailsForm/>}/>
        <Route exact path='/FeSummary' element={<FeSummary/>}/>
        <Route exact path='/ResultSe' element={<ResultSe/>}/>
        <Route exact path='/MaAgeInput' element={<MaAgeInput/>}/>
        <Route exact path='/MaPeakPerformance' element={<MaPeakPerformance/>}/>
        <Route exact path='/MaBodyConfidenceLog' element={<MaBodyConfidenceLog/>}/>
        <Route exact path='/MaExercise' element={<MaExercise/>}/>
        <Route exact path='/MaDayTiredQuiz' element={<MaDayTiredQuiz/>}/>
        <Route exact path='/MaUsersPage' element={<MaUsersPage/>}/>
        <Route exact path='/MaDailyRoutinePage' element={<MaDailyRoutinePage/>}/>
        <Route exact path='/MaHeightInput' element={<MaHeightInput/>}/>
        <Route exact path='/MaWeightInput' element={<MaWeightInput/>}/>
        <Route exact path='/MaDesiredInput' element={<MaDesiredInput/>}/> 
        <Route exact path='/MaAgeInput' element={<MaAgeInput/>}/> 
        <Route exact path='/MaPeakPerformance' element={<MaPeakPerformance/>}/>
        <Route exact path='/Macheckboxone' element={<MaCheckboxone/>}/> 
        <Route exact path='/MaSleepQuiz' element={<MaSleepQuiz/>}/> 
        <Route exact path='/MaWaterQuiz' element={<MaWaterQuiz/>}/>
        <Route exact path='/MaMeatsPage' element={<MaMeatsPage/>}/>
        <Route exact path='/MaFoodPage' element={<MaFoodPage/>}/>
        <Route exact path='/MaOccasion' element={<MaOccasion/>}/>
        <Route exact path='/MaEvent' element={<MaEvent/>}/>
        <Route exact path='/MaResultfirst' element={<MaResultFirst/>}/>
        <Route exact path='/MaDetailsForm' element={<MaDetailsForm/>}/>
        <Route exact path='/MaSummary' element={<MaSummary/>}/>
        <Route exact path='/PaymentSuccess' element={<PaymentSuccess/>}/>
        <Route exact path='/PaymentFailed' element={<PaymentFailed/>}/>
      </Routes>
      
    </Router>
  );
};

export default App;

