import { Link } from "react-router-dom";
import styled from 'styled-components';
import "./app1.css";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    margin: 5px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: silver;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    height: 80%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
            background-color: #e9f5f5;
            transform: scale(1.1);
    }
`

const SearchItem =  ({item}) =>{
    return(
        <div className="searchItem">
            <Container key={item}>
            <Circle/>
            <Image src={item.img} />
            <Info>
            <Icon>
                <i className="fas fa-shopping-cart"></i>
            </Icon>
            <Icon>
                    <Link to={`/product/${item._id}`}>
                    <i className="fas fa-search"></i>
                </Link>
            </Icon>
            <Icon>
                <i className="far fa-heart"></i>
            </Icon>
            </Info>
            </Container>

        </div>
    )
}

export default SearchItem;