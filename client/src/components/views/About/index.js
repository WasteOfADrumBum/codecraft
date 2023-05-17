import React from 'react'
import { Header } from '../../layout'
import profileImg from '../../../assets/images/pro_pic_pastel.jpg'

const About = () => {
	return (
		<div className='About'>
			<Header icon='fas fa-info-circle' header='About' subHeader='Get to know the developer. AKA Me!' />
			<div className='row'>
				<div className='col-12 col-md-8'>
					<p>
						Hello there! I'm Joshua M. Small, a passionate photographer and creative soul. I love capturing beautiful
						moments and sharing them with the world. Let me tell you a bit about myself.
					</p>
					<p>
						Professionally, I have a strong background in photography and visual storytelling. With years of experience
						and a keen eye for detail, I strive to create captivating images that evoke emotions and leave a lasting
						impression. You can find my portfolio of stunning photographs at{' '}
						<a href='https://www.onesmallphoto.com/' target='_blank' rel='noopener noreferrer'>
							One Small Photo
						</a>
						, where I showcase my work and share my artistic vision.
					</p>
					<p>
						When I'm not behind the camera, you can find me engaging with the vibrant community of photographers and
						creatives. I actively participate in the online world, contributing to open-source projects and
						collaborating with fellow developers on{' '}
						<a href='https://github.com/WasteOfADrumBum' target='_blank' rel='noopener noreferrer'>
							GitHub
						</a>
						. You can explore my coding endeavors and projects at GitHub, where I continuously learn and improve my
						technical skills.
					</p>
					<p>
						Beyond my professional pursuits, I am a dedicated family person. I embrace the joys and challenges of
						parenthood, and you can catch a glimpse of my family adventures on my Instagram profile,{' '}
						<a href='https://www.instagram.com/one_small_family/' target='_blank' rel='noopener noreferrer'>
							One Small Family
						</a>
						. It's a place where I document and share the beautiful moments we create together.
					</p>
					<p>
						As a multifaceted individual, I believe in living life to the fullest and pursuing my passions with
						enthusiasm. On my personal Facebook page,{' '}
						<a href='https://www.facebook.com/WasteOfADrumBum' target='_blank' rel='noopener noreferrer'>
							WasteOfADrumBum
						</a>
						, I connect with friends, share my thoughts, and engage in meaningful conversations.
					</p>
					<p>
						If you're interested in learning more about my professional background, feel free to connect with me on
						LinkedIn at{' '}
						<a href='https://www.linkedin.com/in/joshuamsmall/' target='_blank' rel='noopener noreferrer'>
							Joshua M. Small
						</a>
						. I'm always open to connecting with like-minded individuals, discussing collaborations, or exploring new
						opportunities in the world of photography and creative arts.
					</p>
					<p>
						Thank you for taking the time to learn a bit about me. I look forward to connecting and sharing my passion
						for photography and creativity with you!
					</p>
				</div>
				<div className='col-12 col-md-4'>
					<img src={profileImg} alt='Joshua M. Small' className='img-fluid rounded' />
				</div>
			</div>
		</div>
	)
}

export default About
