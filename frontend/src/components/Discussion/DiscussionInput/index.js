import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as discussionActions from '../../../store/discussion';

const DiscussionInput = () => {
	const dispatch = useDispatch();
	const [content, setContent] = useState('');
	const { id } = useParams();
	let projectId = id;
	const sessionUser = useSelector((state) => state.session.user);
	let userId;

	function onSubmit(e) {
		e.preventDefault();
		if (sessionUser) {
			userId = sessionUser.id;
			dispatch(
				discussionActions.addOneDiscussion({
					content,
					projectId,
					userId,
				})
			);
		}
	}

	return (
		<>
			{sessionUser && (
				<>
					<div className='loggedinreply w-full m-4 pb-6'>
						<form className='flex row' onSubmit={onSubmit}>
							<div className='searchcontainer border w-5/6 mr-2'>
								<input
									onChange={(e) => setContent(e.target.value)}
									type='text'
									placeholder='What do you think of this product?'
									className='p-2 w-full'
								/>
							</div>
							<button
								type='submit'
								className='bg-red-500 text-white py-2 px-4'
							>
								SEND
							</button>
						</form>
					</div>
				</>
			)}
			{!sessionUser && (
				<>
					<div className='loggedinreply w-full m-4 pb-6'>
						<form className='flex row'>
							<div className='searchcontainer border w-5/6 mr-2'>
								<input
									type='text'
									placeholder='Login to leave a comment'
									className='p-2 w-full'
								/>
							</div>
							<button
								disabled
								className='bg-red-500 text-white py-2 px-4'
							>
								SEND
							</button>
						</form>
					</div>
				</>
			)}
		</>
	);
};
export default DiscussionInput;
