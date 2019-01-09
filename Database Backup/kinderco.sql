-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2019 at 03:11 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kinderco`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_staff`
--

CREATE TABLE `admin_staff` (
  `staff_admin_id` int(11) NOT NULL,
  `staff_admin_email` varchar(300) NOT NULL,
  `staff_appoint_date` date NOT NULL,
  `staff_phone_number` varchar(12) NOT NULL,
  `staff_gov_id` varchar(255) NOT NULL,
  `staff_room_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin_staff`
--

INSERT INTO `admin_staff` (`staff_admin_id`, `staff_admin_email`, `staff_appoint_date`, `staff_phone_number`, `staff_gov_id`, `staff_room_id`) VALUES
(1, 'aakashgautam107@gmail.com', '2019-01-08', '9862672424', '0144-2345-3452-3212', 20),
(3, 'raidipesh78@gmail.com', '2019-01-04', '9865011760', '1234', 18);

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `attendance_id` int(11) NOT NULL,
  `attendance_student` varchar(300) NOT NULL,
  `attendance_date` date NOT NULL,
  `attendance_checkin_time` varchar(300) NOT NULL,
  `attendance_checkout_time` varchar(300) NOT NULL,
  `attendance_checkedin` tinyint(1) NOT NULL,
  `attendance_checkedout` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`attendance_id`, `attendance_student`, `attendance_date`, `attendance_checkin_time`, `attendance_checkout_time`, `attendance_checkedin`, `attendance_checkedout`) VALUES
(8, 'sujal@gmail.com', '2019-01-09', '12:00', '0', 1, 0),
(9, 'a.u.aua937@gmail.com', '2019-01-09', '12:00', '0', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `diaper`
--

CREATE TABLE `diaper` (
  `diaper_id` int(11) NOT NULL,
  `diaper_student` varchar(300) NOT NULL,
  `diaper_change` varchar(300) NOT NULL,
  `diaper_num` int(11) NOT NULL,
  `diaper_note` text NOT NULL,
  `diaper_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `diaper_uploaded_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `incident`
--

CREATE TABLE `incident` (
  `incident_id` int(11) NOT NULL,
  `incident_student` varchar(300) NOT NULL,
  `incident_title` text NOT NULL,
  `incident_note` text NOT NULL,
  `incident_photo` text NOT NULL,
  `incident_time` varchar(300) NOT NULL,
  `incident_uploaded_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `incident`
--

INSERT INTO `incident` (`incident_id`, `incident_student`, `incident_title`, `incident_note`, `incident_photo`, `incident_time`, `incident_uploaded_by`) VALUES
(1, 'a.u.aua937@gmail.com', 'Amit Upreti Watching movie', 'Amit is watching movie now', 'image_3J18PL_image.png', '12:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `meal`
--

CREATE TABLE `meal` (
  `meal_id` int(11) NOT NULL,
  `meal_student` varchar(300) NOT NULL,
  `meal_type` varchar(300) NOT NULL,
  `meal_well` varchar(300) NOT NULL,
  `meal_photo` text NOT NULL,
  `meal_note` text NOT NULL,
  `meal_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `meal_uploaded_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `meal`
--

INSERT INTO `meal` (`meal_id`, `meal_student`, `meal_type`, `meal_well`, `meal_photo`, `meal_note`, `meal_time`, `meal_uploaded_by`) VALUES
(1, 'sujal@gmail.com', 'Launch', 'Ate Well', 'image_MDCRZW_image.png', 'Breakfast is eaten by sujal and rakesh', '2019-01-08 16:43:03', 0),
(2, 'rupesh@gmail.com', 'Launch', 'Ate Well', 'image_MDCRZW_image.png', 'Breakfast is eaten by sujal and rakesh', '2019-01-08 16:43:03', 0),
(3, 'sujal@gmail.com', 'Snack', 'Didnt Eat Well', 'image_OAY19P_image.png', 'Not ate well amit sathi', '2019-01-09 09:43:49', 0),
(4, 'a.u.aua937@gmail.com', 'Snack', 'Didnt Eat Well', 'image_OAY19P_image.png', 'Not ate well amit sathi', '2019-01-09 09:43:49', 0);

-- --------------------------------------------------------

--
-- Table structure for table `milk`
--

CREATE TABLE `milk` (
  `milk_id` int(11) NOT NULL,
  `milk_student` varchar(300) NOT NULL,
  `milk_time` varchar(300) NOT NULL,
  `milk_vol` varchar(300) NOT NULL,
  `milk_photo` text NOT NULL,
  `milk_note` text NOT NULL,
  `milk_uploaded_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `nap`
--

CREATE TABLE `nap` (
  `nap_id` int(11) NOT NULL,
  `nap_student` varchar(300) NOT NULL,
  `nap_photo` text NOT NULL,
  `nap_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `nap_note` text NOT NULL,
  `nap_uploaded_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `notice`
--

CREATE TABLE `notice` (
  `notice_id` int(11) NOT NULL,
  `notice_title` text NOT NULL,
  `notice_photo` text NOT NULL,
  `notice_note` text NOT NULL,
  `notice_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `notice_uploaded_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `observation`
--

CREATE TABLE `observation` (
  `observation_id` int(11) NOT NULL,
  `observation_student` varchar(300) NOT NULL,
  `observation_milestone` text NOT NULL,
  `observation_time` varchar(300) NOT NULL,
  `observation_photo` text NOT NULL,
  `observation_note` text NOT NULL,
  `observation_uploaded_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `parent`
--

CREATE TABLE `parent` (
  `parent_id` int(11) NOT NULL,
  `parent_admin_id` int(11) NOT NULL,
  `parent_email` varchar(300) NOT NULL,
  `parent_password` varchar(300) NOT NULL,
  `parent_reset_code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `parent`
--

INSERT INTO `parent` (`parent_id`, `parent_admin_id`, `parent_email`, `parent_password`, `parent_reset_code`) VALUES
(1, 28, 'sujal@gmail.com', '1234', 5678),
(2, 29, 'a.u.aua937@gmail.com', '1234', 5678),
(3, 30, 'rupesh@gmail.com', '1234', 5678);

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staff_id` int(11) NOT NULL,
  `staff_admin_id` varchar(300) NOT NULL,
  `staff_email` varchar(300) NOT NULL,
  `staff_password` varchar(300) NOT NULL,
  `staff_reset_code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staff_id`, `staff_admin_id`, `staff_email`, `staff_password`, `staff_reset_code`) VALUES
(2, '1', 'aakashgautam107@gmail.com', '1234', 8888),
(5, '3', 'raidipesh78@gmail.com', '1234', 9919);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `student_id` int(11) NOT NULL,
  `student_name` varchar(255) NOT NULL,
  `student_age` varchar(255) NOT NULL,
  `student_parent_name` varchar(255) NOT NULL,
  `student_parent_email` varchar(300) NOT NULL,
  `student_school_id` int(11) NOT NULL,
  `student_room_id` int(11) NOT NULL DEFAULT '0',
  `student_profile_image` varchar(255) NOT NULL,
  `student_contact_number` varchar(255) NOT NULL,
  `student_address` varchar(255) NOT NULL,
  `student_allergies` varchar(255) NOT NULL,
  `student_dob` date NOT NULL,
  `student_time_in` time NOT NULL,
  `student_time_out` time NOT NULL,
  `student_gender` varchar(255) NOT NULL,
  `student_mealtype` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`student_id`, `student_name`, `student_age`, `student_parent_name`, `student_parent_email`, `student_school_id`, `student_room_id`, `student_profile_image`, `student_contact_number`, `student_address`, `student_allergies`, `student_dob`, `student_time_in`, `student_time_out`, `student_gender`, `student_mealtype`) VALUES
(28, 'Sujal', '6', 'Dopes', 'sujal@gmail.com', 1, 20, '/images/routine.png', '984202020111', 'ku', 'hari', '2019-01-22', '01:16:00', '17:17:00', 'male', 'lunch'),
(29, 'Amit', '3', 'Amit Upreti', 'a.u.aua937@gmail.com', 1, 20, '', '98765432', '', '', '0000-00-00', '00:00:00', '00:00:00', 'male', ''),
(30, 'Rakesh', '2', 'Rupesh', 'rupesh@gmail.com', 1, 20, '', '98765321', '', '', '0000-00-00', '00:00:00', '00:00:00', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_staff`
--
ALTER TABLE `admin_staff`
  ADD PRIMARY KEY (`staff_admin_id`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`attendance_id`);

--
-- Indexes for table `diaper`
--
ALTER TABLE `diaper`
  ADD PRIMARY KEY (`diaper_id`);

--
-- Indexes for table `incident`
--
ALTER TABLE `incident`
  ADD PRIMARY KEY (`incident_id`);

--
-- Indexes for table `meal`
--
ALTER TABLE `meal`
  ADD PRIMARY KEY (`meal_id`);

--
-- Indexes for table `milk`
--
ALTER TABLE `milk`
  ADD PRIMARY KEY (`milk_id`);

--
-- Indexes for table `nap`
--
ALTER TABLE `nap`
  ADD PRIMARY KEY (`nap_id`);

--
-- Indexes for table `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`notice_id`);

--
-- Indexes for table `observation`
--
ALTER TABLE `observation`
  ADD PRIMARY KEY (`observation_id`);

--
-- Indexes for table `parent`
--
ALTER TABLE `parent`
  ADD PRIMARY KEY (`parent_id`),
  ADD UNIQUE KEY `parent_admin_id` (`parent_admin_id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_staff`
--
ALTER TABLE `admin_staff`
  MODIFY `staff_admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `attendance_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `diaper`
--
ALTER TABLE `diaper`
  MODIFY `diaper_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `incident`
--
ALTER TABLE `incident`
  MODIFY `incident_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `meal`
--
ALTER TABLE `meal`
  MODIFY `meal_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `milk`
--
ALTER TABLE `milk`
  MODIFY `milk_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `nap`
--
ALTER TABLE `nap`
  MODIFY `nap_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `notice`
--
ALTER TABLE `notice`
  MODIFY `notice_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `observation`
--
ALTER TABLE `observation`
  MODIFY `observation_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `parent`
--
ALTER TABLE `parent`
  MODIFY `parent_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `staff_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
