import styled from 'styled-components';

export const Container = styled.div``;

export const HeroUser = styled.div`
  height: 29rem;
  overflow-y: hidden;
  background-image: url('http://localhost:3000/files/image1.jpg');
  display: flex;
  place-items: center;
  place-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(#2a3c4400, #30444e);
    z-index: 1;
  }
`;

export const Avatar = styled.div`
  display: block;
  width: var(--size-xl7);
  height: var(--size-xl7);

  > h1 {
    position: relative;
    z-index: 3;
    text-align: center;
    color: #fff;
    margin-top: var(--spacing-md);
  }

  > img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radii-full);
    border: 0.4rem solid var(--green-100);
    z-index: 3;
  }
`;

export const UserActivity = styled.div`
  background-color: var(--grey-300);
  display: flex;
  justify-content: space-evenly;
  padding: var(--padding-md) 0;

  > div {
    text-align: center;
    font-size: var(--size-lg);
    font-weight: bold;
    color: var(--grey-100);

    > small {
      display: block;
      font-size: var(--size-md);
    }
  }
`;

export const UserSocial = styled.div`
  background-color: var(--grey-300);
  display: flex;
  position: relative;
  border-bottom-left-radius: var(--radii-xxl);

  &::after {
    content: '';
    position: absolute;
    width: var(--radii-xl1);
    height: var(--radii-xl1);
    background-color: var(--grey-300);
    top: 100%;
    right: 0;
    z-index: -1;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: var(--spacing-md);
  padding: var(--padding-md);
  flex: 1;
  overflow-x: auto;

  > div,
  a {
    padding: var(--padding-sm);
    border-radius: var(--radii-full);
    display: flex;
    place-content: center;
    place-items: center;
    font-size: var(--size-lg);
    color: #fff;
  }

  .instagram {
    background-image: radial-gradient(
      132% 92% at 33% 91%,
      #feda77 0%,
      #f58529 25%,
      #dd2a7b 50%,
      #8134af 75%,
      #515bd4 100%
    );
  }

  .linkedin {
    background-color: #0077b5;
  }
  .telegram {
    background-color: #0088cc;
  }
  .youtube {
    background-color: #c4302b;
  }
  .github {
    background-color: #000;
  }
  .twitch {
    background-color: #772be8;
  }
`;

export const Points = styled.div`
  width: 9.6rem;

  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  font-size: var(--size-md);

  > svg {
    font-size: var(--size-lg);
  }

  > small {
    color: var(--grey-100);
  }
`;

export const UserBioAndEditProfile = styled.div`
  padding: var(--padding-lg);
  background-image: var(--dark-100);
  flex: 1;
  border-top-right-radius: var(--radii-xxl);
  position: relative;
  z-index: -1;
  line-height: var(--spacing-lg);
  font-size: var(--size-md);

  &::before {
    content: '';
    position: absolute;
    width: var(--radii-xxl);
    height: var(--radii-xxl);
    background-color: var(--dark-200);
    bottom: 100%;
    left: 0;
    z-index: -1;
  }
`;
