import { BankInformation } from 'components/Data/Data'
import React from 'react'
import styled from 'styled-components'

function Banks() {
    return (
        <Mortgage>
            <MortgageContainer>
                <h3 className="mortgage-title">İpoteka krediti olan banklar</h3>
                {BankInformation.map((el, key) => (
					<div className="bank-group" key={key}>
						<img src={el.img} alt="bank logos" />
						<span>{el.text}</span>
					</div>
				))}
                
            </MortgageContainer>
        </Mortgage>
    )
}

export default Banks



const Mortgage = styled.div`

@media only screen and (max-width:64rem){
    /* margin: 20px auto 0 auto; */
  }


`

const MortgageContainer = styled.div`
width: 290px;
height: 330px;
border-radius: 10px;
background-color: var(--white);
padding: 15px;

.bank-group{
    display: flex;
    align-items: center;
    padding:  5px 10px;

    img{
        margin-right: 10px;
        width: 27px;
    }
    span{
        text-align: left;
        color: var(--secondary-color);
        width: 90px;
    }
}

.mortgage-title{
    margin-bottom: 1.25rem;
    color: var(--main-color);
}

`