import styled from 'styled-components';
import {categories} from "../data";
import CategoryItem from './CategoryItem';

const Container =styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
`;

const Categories = () => {
  return (
    <Container className='total4'>
        {categories.map(item => (
            <CategoryItem item={item} key={item.id} />
        ))}   
    </Container>
  )
}

export default Categories
