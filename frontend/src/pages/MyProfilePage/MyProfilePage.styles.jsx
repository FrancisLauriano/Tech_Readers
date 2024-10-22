import styled from 'styled-components';
import Button from '../../components/Button/Button';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  background-color: #ffffff;
  padding: 20px;
  padding-top: 80px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const ProfileSection = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 30px;
  gap: 30px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const UserImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const UserName = styled.h3`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

export const UserBio = styled.div`
  flex: 1;
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  text-align: center;
  font-size: 16px;
  color: #666;
`;

export const EditButton = styled(Button)`
  width: auto;
`;

export const Divider = styled.hr`
  width: 90%;
  max-width: 1200px;
  border: 1px solid #ddd;
  margin: 30px 0;
`;

export const SectionTitle = styled.h2`
  width: 90%;
  max-width: 1200px;
  text-align: left;
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
`;

export const ExchangesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

export const SelectedCard = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #FFFFFF;
  border: 1px solid #B7B7B7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  box-sizing: border-box;
  overflow: visible;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: #FFFFFF;
  border: 1px solid #B7B7B7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.Preto};
  transition: background-color 0.2s, transform 0.2s;
  z-index: 3; 

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

export const ReviewsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;



