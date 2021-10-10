import React from 'react'
import styled from 'styled-components'
import logo from "images/logo.png"

function Login() {
    return (
       <LoginWrapper>
           <LoginContainer>
               <Logo>
                   <LogoWrapper>
                   <LogoImage src ={logo}></LogoImage>
                   <CompanyName>TOWER Construction</CompanyName>
                   </LogoWrapper>
               </Logo>
               <Entrance></Entrance>
           </LoginContainer>
       </LoginWrapper>
    )
}

export default Login

const LoginWrapper = styled.section`

`

const LoginContainer = styled.main`

`

const Logo = styled.aside`

`

const Entrance = styled.div`

`

const LogoWrapper = styled.div`

`

const LogoImage = styled.img`

`
    

const CompanyName = styled.h1`

`
    

