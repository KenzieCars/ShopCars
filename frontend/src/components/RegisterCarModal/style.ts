import { styled } from 'styled-components'

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 9;
`

export const ModalContainer = styled.div`
    width: 95%;
    max-width: 520px;
    max-height: 570px;
    background-color: var(--white);
    border-radius: 8px;
    margin: 2rem auto 0;
    overflow-y: auto;
`

export const FormModalContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 8px;
    padding: 1.4rem;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    background: var(--white);
    margin: 0 auto;

    > .division_between_buttons {
        width: 100%;
        height: 2px;
        border: 1px solid var(--light-gray);
        margin: .5rem 0;
    }

    > .another_brand_input {
        border: none;
        padding: .2rem 1rem;
        position: relative;
        top: -1rem;
        border-bottom: 2px solid var(--gray);
        outline: none;
        transition: .2s ease;

        &:focus {
                border-bottom: 2px solid var(--primary-color);
            }

            &::placeholder {
                color: var(--light-gray);
            }
    }
`

export const TitleModal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > h3 {
        color: var(--gray);
        font-size: 1rem;
        text-decoration: underline;
    }

    > span {
        color: var(--light-gray);
        font-size: 1rem;
        cursor: pointer;
    }
`

export const TitleOptions = styled.div`
    > h4 {
        color: var(--gray);
        font-size: .9rem;
    }
`

export const DualFields = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
    width: 100%;
    
    
    > fieldset {
        display: flex;
        flex-direction: column;
        gap: .4rem;
        border: none;
        width: 60%;

        > label {
        color: var(--gray);
        font-size: .8rem;
        }

        > input {
            padding: .7rem 1rem;
            width: 100%;
            border-radius: 8px;
            border: 2px solid var(--white);
            outline: none;
            color: var(--gray);
            transition: .2s ease;

            &:focus {
                border: 2px solid var(--primary-color);
            }

            &::placeholder {
                color: var(--light-gray);
            }

            &:disabled {
                background-color: white;
            }
        }
    }
`

export const FieldsetModal = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: .4rem;
    border: none;
    position: relative;

    > label {
        color: var(--gray);
        font-size: .8rem;
        }

        > select {
        padding: .7rem 1rem;
        border-radius: 8px;
        border: 2px solid var(--white);
        outline: none;
        color: var(--gray);
        transition: .2s ease;
    }

    > textarea {
        padding: .7rem 1rem;
        border-radius: 8px;
        border: 2px solid var(--white);
        outline: none;
        color: var(--gray);
        transition: .2s ease;
        resize: none;

        &:focus {
            border: 2px solid var(--primary-color);
        }

        &::placeholder {
            color: var(--light-gray);
        }
       
    }

    > input {
        padding: .7rem 1rem;
        border-radius: 8px;
        border: 2px solid var(--white);
        outline: none;
        color: var(--gray);
        transition: .2s ease;

        &:focus {
            border: 2px solid var(--primary-color);
        }

        &::placeholder {
            color: var(--light-gray);
        }

        &:disabled {
            background-color: white;
        }
    }
`

export const ModalButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    > button {
        background: var(--primary-color);
        padding: .8rem;
        width: 100%;
        color: var(--white);
        font-size: .9rem;
        font-weight: 600;
        transition: .2s ease;

        &:hover {
            background: var(--black);
            color: var(--white);
        }
    }

    > .cancel {
        background-color: var(--light-gray);

        &:hover{
            background-color: var(--gray);
        }
    }
`

export const AddImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    min-height: 35px;

    > button {
        background-color: var(--primary-color-hover);
        height: 2rem;
        border-radius: 8px;
        width: 60%;
        color: var(--primary-color);
        font-weight: 700;
        transition: .2s ease;

        &:hover {
            background: var(--primary-color);
            color: var(--white);
        }
    }

    > .remove {
        position: absolute;
        top: 0;
        right: 0;
        width: 38%;
        color: var(--white);
        background-color: var(--light-gray);

        &:hover {
            background-color: var(--alert-negative);
        }
    }
`
export const ErrorModal = styled.p`
    color: var(--alert-negative);
    font-size: .5rem;
    letter-spacing: .04rem;
    transition: .4s ease;
`