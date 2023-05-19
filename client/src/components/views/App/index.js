import React from 'react'
import { Header, SubHeader } from '../../layout'
import profileImg from '../../../assets/images/home_img.jpg'

const App = () => {
	return (
		<div className='App'>
			<Header icon='fas fa-code' header='CodeCraft' subHeader='Custom Bootstrap Theming and MERN Stack Showcase' />
			<div className='row'>
				<div className='col-12'>
					<span className='d-none d-md-block'>
						<img
							src={profileImg}
							alt='Joshua M. Small'
							className='img-fluid w-50 rounded-start-pill float-start imgshadow pt-1 pe-3 pb-3 ps-1'
						/>
					</span>
					<span className='d-block d-md-none'>
						<img src={profileImg} alt='Joshua M. Small' className='img-fluid rounded pb-4' />
					</span>
					<p>
						Welcome to CodeCraft, where I invite you to explore my world of custom Bootstrap theming and MERN stack
						skills. As a passionate and dedicated developer, I take great pride in creating visually captivating and
						highly functional web applications. With an in-depth understanding of Bootstrap theming, I possess the
						ability to craft unique and eye-catching designs that perfectly align with my personal style and brand
						identity. CodeCraft is the place where I bring my vision to life, whether I'm breathing new life into
						existing websites or starting from scratch.
					</p>
					<p>
						At the core of my expertise lies the mastery of the MERN stack, an amalgamation of MongoDB, Express.js,
						React, and Node.js. This powerful combination empowers me to develop robust and scalable web applications.
						From dynamic user interfaces that engage and captivate users to seamless data management that ensures smooth
						operations, I leverage the full potential of these cutting-edge technologies to deliver exceptional user
						experiences. Furthermore, I ensure that my websites are efficient, high-performing, and responsive across
						various devices and platforms.
					</p>
					<p>
						Specializing in CRUD applications, I am well-versed in providing powerful data management capabilities. By
						designing intuitive user interfaces and implementing efficient CRUD operations for Create, Read, Update, and
						Delete functionalities, I enable effortless and streamlined management of data. Whether it's a sophisticated
						content management system or a feature-rich e-commerce platform, my custom solutions are designed to empower
						me to handle data with ease and efficiency.
					</p>
					<p>
						Join me on an exhilarating journey into the world of digital craftsmanship as I proudly showcase my custom
						Bootstrap theming skills, my expertise in the MERN stack, and the incredible convenience and power of CRUD
						applications. My commitment lies in delivering innovative and tailored solutions that not only meet my
						unique requirements but also exceed expectations. Together, let's turn ideas into reality and elevate my
						online presence to new heights. Stay connected as I share my projects, insights, and growth as a skilled and
						passionate developer.
					</p>
				</div>
			</div>
			<SubHeader icon='fas fa-code' title='Title' description='desc' />
		</div>
	)
}

export default App
