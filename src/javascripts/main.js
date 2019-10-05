import 'bootstrap';
import '../styles/main.scss';
import navbar from './components/navbar/navbar';
import studentList from './components/studentList/studentList';

const init = () => {
  navbar.loadNavbar();
  studentList.createStudentList();
};

// 3rd make our init function
// 4th we need to make our navbar js and init the function

init();
