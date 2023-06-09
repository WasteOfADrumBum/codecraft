import React, { useEffect, useState } from 'react'
import UserUpdateModal from '../UserUpdateModal'
import profileDarkImage from '../../../assets/images/profile_dark.png'

const UserTable = ({ users, addButton }) => {
	const [imageSources, setImageSources] = useState({})

	useEffect(() => {
		const importImages = async () => {
			const imageSources = {}

			for (const user of users) {
				try {
					const image = await import(`../../../assets/images/${user.profileImage}`)
					imageSources[user.profileImage] = image.default
				} catch (error) {
					console.error(`Failed to import image: ${user.profileImage}`)
					imageSources[user.profileImage] = profileDarkImage
				}
			}

			setImageSources(imageSources)
		}

		importImages()
	}, [users])

	return (
		<div className='table-responsive'>
			<table className='table'>
				<thead>
					<tr>
						<th />
						<th>Name</th>
						<th>Email</th>
						<th>Username</th>
						<th>Address</th>
						<th>{addButton}</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user._id}>
							<td>
								<img
									src={imageSources[user.profileImage] || profileDarkImage}
									alt={user.name}
									className='img-fluid'
									style={{ width: '25px' }}
								/>
							</td>
							<td>
								{user.last || user.first || user.middle ? (
									<>
										{user.last}, {user.first} {user.middle}
									</>
								) : (
									'N/A'
								)}
							</td>
							<td className={!user.email ? 'text-danger' : ''}>{user.email || 'Invalid E-mail'}</td>
							<td className={!user.username ? 'text-danger' : ''}>{user.username || 'Invalid Username'}</td>
							<td>
								{user.address.street || user.address.city || user.address.state || user.address.zipcode ? (
									<>
										{user.address.street} {user.address.city}{' '}
										<span className='text-uppercase'>{user.address.state}</span> {user.address.zipcode}
									</>
								) : (
									'N/A'
								)}
							</td>
							<td>
								<UserUpdateModal userId={user._id} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default UserTable
