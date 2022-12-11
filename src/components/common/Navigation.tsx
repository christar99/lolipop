import React, { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store';
import { csrFetch } from 'store/csrFetch';

const NavigationContainer = styled.div`
	width: 100%;
	height: 70px;
	z-index: 10;
	display: flex;
	align-items: center;
	position: fixed;
	opacity: 0.8;
	background-color: rgb(235, 102, 45);
`;

const LogoHeader = styled.div`
	font-size: 4rem;
	margin-left: 30px;
`;

const MenuList = styled.div`
	display: flex;
	margin-left: 50px;
	gap: 20px;
`;

const Menu = styled.div`
	font-size: 2rem;
`;

const Version = styled.div`
	position: relative;
	font-size: 2rem;
	position: absolute;
	right: 30px;
`;

function Navigation() {
	const version = useAppSelector((state) => state.version.lastVersion);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(csrFetch.getVersionList());
	}, [dispatch, version]);

	return (
		<NavigationContainer>
			<LogoHeader>
				<Link href="/">
					<span>LOLIPOP</span>
				</Link>
			</LogoHeader>
			<MenuList>
				<Link href="/items">
					<Menu>아이템 정보</Menu>
				</Link>
				<Link href="/champions">
					<Menu>챔피언 정보</Menu>
				</Link>
			</MenuList>

			<Version>Version {version}</Version>
		</NavigationContainer>
	);
}

export default Navigation;
