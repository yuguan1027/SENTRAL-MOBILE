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
BUSINESS & MANAGEMENT


PROGRAMME OVERVIEW

SENTRAL College Penang’s School of Business & Management adopts a holistic approach to produce confident graduates who are well prepared to face the exciting and challenging business world. Through SENTRAL’s business programmes, you will be equipped with a broad understanding of global markets, international businesses, customer behaviour, accounting and financial concepts, business operations, communication and strategies. To ensure that its course syllabus is compatible with the current challenges of today’s business environment, SENTRAL College Penang collaborates with respected industrial experts from the field of business to design and develop its curriculum. With the constant feedback from experienced business advisors, SENTRAL’s business programme ensures an up-to-date syllabus, and facilitates in the development of knowledgeable and employable students.



A PRACTICAL SYLLABUS

Apart from that, a key contribution to the overall employability of SENTRAL’s students is due to its emphasis on a practical syllabus, which exposes students to actual working conditions in the workforce through internship placements, industrial visits (e.g., Kong Cheong Food Industries Sdn. Bhd. visit in June 2017) and hands-on, interactive group projects. Besides, through the business programme offered by SENTRAL’s partner, the University of Salford, UK, students who undertake bachelor degrees are exposed to experiential learning through overseas business excursions.

In addition, students at SENTRAL College Penang are also offered additional seminars and workshops on business communication, professional development, and public speaking. SENTRAL students are also kept abreast of current issues by participating in external business conferences, such as the most recent FMM CEO Forum 2017 in Spice Arena, Penang. Furthermore, business programme lecturers constantly encourage students to actively participate in community services and extra-curricular activities to develop ethical values and valuable soft skills such as leadership, problem solving and teamwork.

In summary, the business programmes offered at SENTRAL College Penang ensures a holistic development by emphasizing on a hands-on syllabus, which fully equips business graduates with the demands of the business world.



So what are you waiting for? You could be the next Jack Ma or Steve Jobs!

Explore the list of our business programmes below:



SENTRAL COLLEGE PENANG

Diploma in Business Studies
KPT/JPT(R/340/4/0113)02/16

UNIVERSITY OF SALFORD, UK

BSc (Hons) Business & Management
JPT/BPPP(K)1007-701/180JLD2(37)

UNITAR

Foundation in Management
JPT/BPP(MQA/FA1742)

Bachelor of Business Administration (Hons)
JPT/BPP(MQA/FA1711)

Master in Business Administration
JPT/BPP(MQA/FA1712)
`;
const long_desc_2= `
COMPUTER & TECHNOLOGY


PROGRAMME OVERVIEW

Computing and Information Technology (IT) are reshaping various aspects of the world and the societies we live in. It has become integral to our daily lives - from the medium we use to communicate with others, to the automotive we use to commute in, and to the way organisations go about doing business. Given the prevalence of IT in our lives, it is easy to appreciate the positive aspects and importance of technology. Essentially, from pop-up stores, to multinational corporations, businesses need IT to provide more efficient services and to grow rapidly. As technology continues to progress and evolve, there is continuously high demand for IT professionals.



A HIGH QUALITY AND RELEVANT SYLLABUS

SENTRAL College Penang started their IT programmes in partnership with one of the top leading IT education and solutions provider institution in India, the National Institute of Information Technology (NIIT). It eventually adopted its own internal programmes, which follows a similar syllabus of that of NIIT’s. In addition, SENTRAL College Penang’s Business Information Technology programme is offered in collaboration with one of the top 100 universities in the UK, the University of Salford, Manchester.

The College is committed to providing high quality learning experiences by continuously receiving constructive feedback from industry professionals and revising its IT curriculum accordingly. Furthermore, SENTRAL College Penang‘s syllabus is also moderated by external academic advisors from reputable public institutions in Malaysia.

To ensure students enrolled in IT programmes at SENTRAL College Penang are kept abreast with the latest technology, they are exposed to real world projects, such as mobile application development, web applications, enterprise systems, cloud computing, and e-commerce solutions. While the School of Computing and IT emphasizes on the importance of technical knowledge, it does not forego the essentials of designing and multimedia.



CAREER-ORIENTED CURRICULUM

Career opportunities in IT are expected to increase over the next decade. SENTRAL College Penang has committed to designing a completely industry-specific curriculum to ensure its students acquire highly employable skills and transition smoothly into their careers upon graduating. SENTRAL College Penang’s curriculum aims to nurture a creative and global mindset among its students, focusing on a practical approach to teaching and learning. 80% of its IT courses are conducted in computer labs, which provide students the opportunity to develop problem solving, teamwork, communication and project management skills in various assignments.

In addition, to ensure that students are kept abreast with industry related needs, the School of Computing and Information Technology organises a series of extracurricular activities such as industrial visits and talks by industrial experts. For instance, students were brought to Malaysia Multimedia Development Corporation (MDeC) to learn about internal operations. They were also educated about the latest progress of the technological industry in Malaysia. Besides, the Exabytes Field Trip in 2017 allowed students to be exposed to technological and business setting in a web hosting company. An upcoming event is Seminar Kerjaya Digital 2017, where IT students get to showcase their projects, with the prospect of implementation by the state government. The event serves as a great platform for them to consolidate and showcase what they have learnt in their IT courses. Students get to challenge themselves, enhance their creativity and nurture their mind to be a skilled IT professional.

Furthermore, IT students are required to undertake industrial trainings and a final year project during their course of study. To date, the School of Computing and Information Technology works closely with the manufacturing and software industry. 100% of our graduates are observed by the respective industries within 3 months either before or after the completion of studies with SENTRAL College Penang. Past SENTRAL students have interned at organisations such as G hotel, Inari Technologies, Thomson Reuters, Intel and Jabil.

With an IT degree, graduates can find work in a number of occupations, including IT consulting, business analyst, information security, database/system administration, and product development. Most IT graduates from SENTRAL College Penang have ventured into careers in the software and manufacturing industry, extending from small and medium enterprises to multinational corporations.



If you have an interest in technology, see problems as learning opportunities, constantly think outside the box and love a technical challenge, we believe we can help you build your future in this rewarding and well-paying field.

Explore the list of our IT programmes below:



SENTRAL COLLEGE PENANG

Certificate In Business Information Technology
KPT/JPT(N/481/3/0279)03/18

Diploma In Computer Systems Technology
KPT/JPT(N/481/4/0078)03/18

UNIVERSITY OF SALFORD, UK

BSc (Hons) Business Information Technology
JPT/BPP(K)1000-701/180JLD2(37)
`;
const long_desc_3= `
ACCOUNTING & FINANCE


PROGRAMME OVERVIEW

Every aspect of an organisation, field, industry, or sector requires accounting and finance professionals who can record, measure, summarise, interpret and communicate financial information. These financial information are crucial to solve financial problems and for respective business functions to make informed strategic decisions. The Accounting and Finance programmes offered at SENTRAL College Penang equips you with up-to-date and in depth coverage of accounting and finance knowledge, ranging from taxation to commercial law.



ACCA PLATINUM STATUS

SENTRAL College Penang prides itself in its achievement as the only college in Penang, Malaysia to receive the ACCA platinum status, awarded by ACCA UK since December 2013. This award indicates a high passing rate and the quality standards of SENTRAL’s accounting students. Since the establishment of SENTRAL College Penang in 2002, the college has produced outstanding accounting professionals and has received a number of World / Malaysia awards from CAT and ACCA till to date.



INTERNATIONAL PARTNERSHIPS

SENTRAL College Penang also partners with the prestigious University of Salford, one of the top 100 UK universities, which offers students an outstanding educational experience. Students who enrol in the Bachelor of Accounting and Finance programme are provided with the opportunity to study abroad in their second or third year of studies at the University of Salford campus in the UK. In addition to their accounting and finance studies, they are exposed to experiential learning through overseas business excursions through the “Intercultural Management” course.



CAREER-ORIENTED CURRICULUM

In summary, the Accounting and Finance curriculum offered at SENTRAL College Penang is carefully designed to fit the requirements of professional bodies while providing students a competitive edge by developing their soft skills. This is done through practical training, workshops, and internship placements. For example, our accounting and finance students participated in a 2-day financial literacy simulation workshop in June 2017, held at SENTRAL College Penang, in collaboration with CIMB Foundation and GEM Systems Sdn. Bhd. Through this workshop, they are equipped with the knowledge of managing their personal finances to achieve financial freedom. Besides, the “Accounting Day” Career Fair which was held in December 2016, organized by ACCA in collaboration with SENTRAL College Penang, attracted industry giants such as Ernst and Young, KPMG, PWC and Malaysian Institute of Accountants (MIA). Accounting students were exposed to various career talks by industrial experts on the day, and gained a deeper insight on the skills needed to be successful in the accounting profession.

Accounting and finance graduates are eligible for various  job opportunities, such as auditing, financial advisor, business consultant, tax advisor and chief executive officer. As an accounting and finance student of SENTRAL College Penang, it is likely that you will be able to assimilate smoothly into the job market and sought after by employers, upon your graduation.



If you are interested and good at crunching numbers, and have an eye for detail, you may consider furthering your studies with us in an accounting and finance programme.

Explore the list of our accounting and finance programmes below:



SENTRAL COLLEGE PENANG

Diploma In Accounting
KPT/JPT(N/334/4/0249)04/19A

UNIVERSITY OF SALFORD, UK

BSc (Hons) Accounting & Finance
JPT/BPP(K)1000-701/180JLD2(37)

ACCA

Certified Accounting Technician (CAT)
KPT/JPT(R/344/3/0123)03/18

ACCA Qualification
KPT/JPT(R/344/6/0095)02/17
`;
const long_desc_4= `
TOURISM & HOSPITALITY


PROGRAMME OVERVIEW

The travel and tourism industry is one of the largest and most dynamic industries in today’s global economy, making this field one of the largest fields for employment. There is high demand for qualified individuals who can provide top-notch services to tourists. Students enrolled in the School of Tourism and Hospitality at SENTRAL College Penang will be equipped with relevant knowledge, skills and attitude required to excel in this thriving industry. Known for its rich heritage and architecture, peaceful scenery and its famous mouth-watering local cuisines, Penang is one of the most popular tourist destinations in Malaysia. Students are provided with the perfect opportunity to apply the knowledge gained from their Tourism programmes in this world renowned UNESCO World Heritage Site.


TRAVEL AND LEARN

The most unique aspect of the Diploma in Tourism Management offered at SENTRAL College Penang is students are given a chance to travel both locally and overseas to learn about different cultures, and to practice basic tour guiding skills such as hotel check in and airport group check in.



A HOLISTIC LEARNING EXPERIENCE

SENTRAL’s Tourism and Hospitality programmes provide students with an ideal balance of academic theory and practical learning such as industrial visits, group projects and volunteerism. This encourages an appreciation of the unique features and challenges of the tourism and hospitality industries among students. For instance, in July 2017, students were brought to an industrial visit to G Hotel to learn about different job functions in various departments available at the hotel. In addition, students who enrolled in the “Event Management” course organized a Heritage Race in the UNESCO World Heritage Zone in August 2017. Participants of the event had a great time playing traditional games and learning more about various places of interests in Penang.

Certificate and Diploma students from the School of Tourism and Hospitality are also encouraged to actively participate in community services and volunteering projects organized by the Ministry of Tourism and Culture, Malaysia (MOTAC). This allows them to develop ethical values and soft skills such as leadership, communication, problem solving and teamwork. Some of the volunteering events they participated in 2017 were Penang’s Chinese New Year Festival held at the Esplanade, Jom Makan Durian Event, and Georgetown Heritage Festival. Through those events, students gained valuable insights on how a real event is carried out by MOTAC and had fun at the same time.

To ensure they are provided with up-to-date and relevant education, students enrolled in SENTRAL’s Tourism and Hospitality programmes are also kept abreast with current issues by participating in external conferences. Some seminars include “BEngaged”, a 2-days programme conducted by Penang Convention and Exhibition Bureau together with Penang State in December 2016; as well as the most recent FMM CEO Forum 2017 in Spice Arena, Penang.



In summary, the practical syllabus offered by the School of Tourism and Hospitality at SENTRAL College Penang enables graduates to be knowledgeable, confident, and highly employable in hotels, travel and tourism, airlines, food and beverage, events and other service-related industries.

Explore the list of our tourism and hospitality programmes below:



SENTRAL COLLEGE PENANG

Certificate In Tourism Operations
KPT/JPT(N/812/3/0047)03/18

Diploma In Tourism Management
JPT/BPP(K)1000-600/P712JLD2(37)

MINISTRY OF TOURISM AND CULTURE MALAYSIA / MINISTRY OF HUMAN RESOURCE MALAYSIA

Tourist Guides Programme (SKM 3)
JPK/HT-023-3:2012/01/15


`;
const long_desc_5= `
EARLY CHILDHOOD EDUCATION


PROGRAMME OVERVIEW

The future lies in the hands of children. Therefore, children need educators to inspire and to provide guidance for them. Nowadays, governments, parents and the general public are placing a greater emphasis on trained and qualified early childhood educators.  SENTRAL College Penang partners with UNITAR to offer you Diploma and Degree in Early Childhood Studies. We view ourselves as an active and vibrant contributor in nurturing and shaping the future generation. Our syllabus adopts a practical approach by incorporating various modes of deliveries such as face to face, online; and internships.

There are various career opportunities available to early childhood graduates such as pre-school or kindergarden teachers, educational administrator, special education teacher, kindergarden owners and many more.



If you have a genuine passion for educating young children, join us today!

Explore the list of our early childhood education programmes below:



UNITAR

Diploma in Early Childhood Education
N/143/4/0023 (MQA/FA 1703)

Bachelor of Early Childhood Education (Hons)
N/141/6/0008 (MQA/FA 1746)

`;
img1 = require("../../../assets/Sentral/Programmes/banner1.png");
img2 = require("../../../assets/Sentral/Programmes/banner2.png");
img3 = require("../../../assets/Sentral/Programmes/banner3.png");
img4 = require("../../../assets/Sentral/Programmes/banner4.png");
img5 = require("../../../assets/Sentral/Programmes/banner5.png");


  const ContentGenerator = ( {img , desc} ) => (
    <View style={{marginBottom:130}}>
    <Image style={[styles.fullImage]}
      //resizeMode="contain"
    source={img}
    />
    <ScrollView style={{paddingRight:5,paddingLeft:5,backgroundColor:'#EEEEEE'}}>
      <Text>{desc}</Text>
    </ScrollView>
    </View>
  );



const Screen1 = () => (
  <ContentGenerator desc={long_desc_1} img={img1} />
);
const Screen2 = () => (
   <ContentGenerator desc={long_desc_2} img={img2} />
);
const Screen3 = () => (
   <ContentGenerator desc={long_desc_3} img={img3} />
);
const Screen4 = () => (
   <ContentGenerator desc={long_desc_4} img={img4} />
);
const Screen5 = () => (
   <ContentGenerator desc={long_desc_5} img={img5} />
);


/*
  Tab Navigation
*/
const TabNav = TabNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions : {
      tabBarIcon: (
        <Icon name='dollar' type='font-awesome' color='#03A9F4' />
      ),
    },
  },
  Screen2: {
    screen: Screen2,
    navigationOptions : {
       tabBarIcon: (
         <Icon name='code' type='font-awesome' color='#C8E6C9' />
       ),
    },
  },
  Screen3: {
    screen: Screen3,
    navigationOptions : {
      tabBarIcon: (
        <Icon name='calculator' type='font-awesome' color='#E57373' />
      ),
    },
  },
  Screen4: {
    screen: Screen4,
    navigationOptions : {
      tabBarIcon: (
        <Icon name='globe' type='font-awesome' color='#FF6D00' />
      ),
    },
  },
  Screen5: {
    screen: Screen5,
    navigationOptions : {
      tabBarIcon: (
        <Icon name='book' type='font-awesome' color='#80DEEA' />
      ),
    },
  },

}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    showIcon :true,
    showLabel : false ,
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
