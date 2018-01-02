import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  fullImage: {
    width: Dimensions.get('window').width,
    height: 130,
  },

});


const long_desc_1= `
  OUR JOURNEY
  SENTRAL College was established in 2002 with the aspiration to be a tertiary education platform for youth. Its founding goal was to develop students into wholesome capable individuals who will support their family, serve the community and strive for the country. Dr Chiang Geok Lian as the Founding Principal and CEO of SENTRAL was appointed to uphold the establishment's purposeful goal. To this date, she has been a strong pillar of support and the catalyst of SENTRAL's growth.

  PARTNERSHIP TOWARDS SUCCESS

  With Dr Chiang at the helm, we embarked on an enduring journey to provide the highest quality academic development. We continuously seek partnerships with prestiguos institutions of higher learning, both localy and from abroad, to bring various offerings for students with different career preferences.

  We have amassed a rich portfolio of programmes as our partner institutions grew since SENTRAL started. The partners include UNITAR, Swinburne University, University of Salford, Association of Chartered Certified Accountants (ACCA), and The International Air Transport Association (IATA). The programmes we offer span from certificates to bachelors and masters degrees, encompassing the areas of Foundation Studies, Accounting, Business, Management, Information Technology, Tourism and Early Childhood Education.

  FOCUSED VISION, DRIVING GROWTH

  The name SENTRAL COLLEGE PENANG was adopted in 2013, but the college was founded as SENTRAL Technology College. The shift was significant as it reflect our success in growing the organisation into an all-encompassing institution.

  The growth and expansion have brought an increased student's population rendering our original location at Jalan Zainal Abidin inadequate. Subsequently, we expanded our operations and relocated to a bigger and a better-equipped 14-storey building at the junction of Lebuh Penang and Lebuh Bishop in George Town. We proudly call it the SENTRAL Tower.

  New SENTRAL is thriving in the hustle and bustle at the heritage enclave of George Town to produce engaging graduates to serve the community. We reaffirm the founding goal of SENTRAL and are committed to realising our vision.
`;
const long_desc_2= `
  OUR VISION
  To be an impactful and significant institution, fostering programme relevance, creative thinking and institutional excellence.

  OUR MISSION
  To provide excellent education through nurturing, inspiring and creating a conductive learning environment that will prepare students for dynamic careers, meaningful lives and to be compassionate citizens in a global society.

  OUR STRATEGIC PLANS

  SENTRAL College prides itself in having an enterprising Principal whose professional skills and expertise run at par excellence with the needs and aspirations of its local and foreign partners.

  In addition, we have knowledgeable and passionate staff who are dedicated to fulfill SENTRAL's Vision and Mission.

  OUR STRATEGIC PILLARS

  Smart Trust in Corporate Governance towards quality and performance. We foster an ambitious vision and ensure that all students are able to achieve their highest potential.

  Financial Sustainability regardless of good or bad times to ensure we are able to deliver our commitment. We remain steadfast in our obligation to our students and their parents.

  Conducive Work Environment for our employees who are the vital key success to our institution of higher learning. We are committed in providing an amiable, intellectually challenging, and rewarding workplace. Team Dynamics that brings about the support, encouragement and assistance among the members of the college. We inculcate excellence, creativity, and trust within the organisation in pursuit of delivering an excellent educational platform for students.

  City Campus that is well maintained and clean, in line with our institution's educational mission. We aim to provide an environment conducive to learning at the heart of George Town.

  OUR CORE BELIEFS

  We are committed to our intrinsic beliefs that we all have the rights and responsibilities to:

  earn the basic necessities for a wholesome life
  take accountability for our actions and everything around us
  discharge obligation to respect ourselves and others
  carry the burden and privilege to be part of this world
  appreciate that from others we get, to others we give
  OUR CORE VALUES


  Integrity


  Trust


  Process Driven


  Professionalism


  Mutual Respect


  Sharing


  Continuous Improvement
`;
const long_desc_3= `
  PRINCIPAL'S MESSAGE
  Every year we gather our thoughts to remember and savour the past, to celebrate the achievement of our students in their great journey of learning and to look forward to welcoming new students who join us for a journey that will bring them the richness of learning and to prepare them to live a life of significance. SENTRAL is pleased to play a vital role in the provision of higher educational programmes to meet the varying needs of current day learners wishing to obtain globally recognised qualifications in pursuit of their career goals.

  After almost 15 years since its inception in the Jalan Zainal Abidin Campus, SENTRAL College moved to its new George Town Campus in December 2013. The move is rooted deeply in the College's commitment towards providing a time and place for young students to develop wholesomely to serve their family, community and the country. I would like to thank all the constituent members of the College, past and present, students and staff alike, for contributing to the success of the College that has powered the College to this great heights.

  SENTRAL continues to put the learning and education needs of the students first by focusing on quality and integrity to provide the student with a body of knowledge in their chosen disciplines while providing exciting stimulus for a lifelong learning experience. There is an emerging shift from education for employment (developing the ability to do a specific job) to education for employability (developing the ability to adapt skills to new working environments). This fits well into the government's aspiration of becoming a high-income nation, which is hinged on having people who have a high sense of personal mastery and can extend their abilities to change organisational realities. All planned programmes of learning at SENTRAL are relevant, comprehensive and presented to meet the real needs of learners for the real world.

  As you step into your educational journey at SENTRAL and beyond, think and act more to become useful; choose knowledge and skills over physical comfort and idleness, choose leadership over being mere average, choose to be innovative, pro-active and knowledge building than be complacent, passive and parroting. You will develop habits that will stand you in good stead when you set out in your life and your chosen profession. Be confident and be as interesting as you can and, work in partnership with colleagues and friends to make progress in the world. We look forward to welcoming you to be part of SENTRAL's community of learners.
`;
const long_desc_4= `
  QUALITY ASSURANCE
  SENTRAL College Penang is an ISO9001:2015 certified institution. Our Quality Management System ensures that we maintain a high level of excellence in all our activities, tasks and processes. The management and staff of SENTRAL College Penang are seriously committed in continuously implement and maintain quality education services to our students and customers and to ensure SENTRAL remains a leading higher education provider. We, at SENTRAL College Penang, provider of higher education, will meet our mission, vision, and core values by:

  S teadily meeting or exceeding our students' expectations for quality higher education programmes and services

  E nsuring the programmes and services are designed and implemented with a commitment to meet the nation's aspirations

  N urturing a productive and challenging work environment that fosters staff involvement, teamwork, motivation and skills development

  T hriving for compliance and conformance with governmental bodies and partner institutions

  R eviewing periodically the effectiveness of the quality management system

  A ctively seeking opportunities to enrich students' knowledge, skills, ethics and experiences

  L earning continuously to improve our core competencies

  Certified ISO 9001:2015
`;
const long_desc_5= `
  REASON TO CHOOSE US
  Choosing the RIGHT COLLEGE can be an important decision to make.

  Here are the GOOD REASONS why choosing SENTRAL would make a big difference in your HIGHER EDUCATION EXPERIENCE!


  STRATEGIC & PRESTIGIOUS LOCATION

  Our cutting-edge and well-equipped city campus is strategically located at the heart of George Town's heritage enclave. The 14-storey Campus offers a 360 degree view of the College's surroundings.


  QUALITY EDUCATION & GLOBALLY RECOGNISED

  All curriculums are up-to-date and industry driven. A holistic approach to excellent education is geared towards producing employable graduates.


  ESTABLISHED PARTNER UNIVERSITIES

  SENTRAL College Penang offers cost-effective routes to quality overseas qualification.


  ACCA PLATINUM AWARD PARTNER

  Awarded by invitation from ACCA, SENTRAL College Penang is ACCA's only Platinum Partner in the Northern Region.


  ISO 9001:2015 CERTIFIED

  We are an ISO 9001:2015 certified College.


  AFFORDABLE FEES & FINANCIAL AID

  SENTRAL College Penang offers affordable fees in addition of merit and other scholarships for deserving students.


  QUALITY & PROFESSIONAL LECTURERS

  Stringent selections of lecturers are based not only on relevant qualification but they must have a caring personality with deep passion and commitment for teaching.


  VIBRANT STUDENT LIFE

  Regular extra-curricular activities are organized to hone the soft skills of the students; enabling them to acquire an in-depth understanding of the key skills, concepts and techniques needed to succeed in their chosen field.
`;
AboutUs_img1 = require("../../../assets/Sentral/AboutUs/banner1.png");
AboutUs_img2 = require("../../../assets/Sentral/AboutUs/banner2.png");
AboutUs_img3 = require("../../../assets/Sentral/AboutUs/banner3.png");
AboutUs_img4 = require("../../../assets/Sentral/AboutUs/banner4.png");
AboutUs_img5 = require("../../../assets/Sentral/AboutUs/banner5.png");


  const ContentGenerator = ( {img , desc} ) => (
    <View>
    <Image style={[styles.fullImage]}
      //resizeMode="contain"
    source={img}
    />
    <ScrollView>
      <Text>{desc}</Text>
    </ScrollView>
    </View>
  );



const OurJourney = () => (
  <ContentGenerator desc={long_desc_1} img={AboutUs_img1} />
);
const VisionMission = () => (
   <ContentGenerator desc={long_desc_2} img={AboutUs_img2} />
);
const PrincipalMessage = () => (
   <ContentGenerator desc={long_desc_3} img={AboutUs_img3} />
);
const QualityAssurance = () => (
   <ContentGenerator desc={long_desc_4} img={AboutUs_img4} />
);
const SentralEdge = () => (
   <ContentGenerator desc={long_desc_5} img={AboutUs_img5} />
);


/*
  Tab Navigation
*/
const TabNav = TabNavigator({
  OurJourney: {
    screen: OurJourney,
    navigationOptions : {
       title: 'Our Journey',
    },
  },
  VisionMission: {
    screen: VisionMission,
    navigationOptions : {
       title: 'Vision & Mission',
    },
  },
  PrincipalMessage: {
    screen: PrincipalMessage,
    navigationOptions : {
       title: 'Pricipal\'s Message',
    },
  },
  QualityAssurance: {
    screen: QualityAssurance,
    navigationOptions : {
       title: 'Quality Assurance',
    },
  },
  SentralEdge: {
    screen: SentralEdge,
    navigationOptions : {
       title: 'Sentral\'s Edge',
    },
  },

}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#BDBDBD',
    labelStyle: {
      fontSize: 7,
    },
    tabStyle: {
      height: 50,
    },
    style: {
     backgroundColor: '#1a5b4c'
   },
  },
  header:null,
});



//Export Itself
export default class App extends Component<{}> {
  render(){
    return(
      <TabNav />
    );
  }
}


//export default MainContent;
