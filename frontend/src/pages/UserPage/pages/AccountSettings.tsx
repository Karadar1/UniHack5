import {useState} from 'react'
import { FormCard, InputBox } from 'src/pages/SignUp/SignUp.styled';


export default function AccountSettings() {

    const [username, setUserName] = useState('');   
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const renderInput = (inputCase: string) => {
        switch (inputCase) {
            case "username": {
                return (
                    <InputBox
                        onChange={(event: any) => setUserName(event.target.value)}
                        placeholder="New Username"
                        type="string"
                    />
                );
            }
            case "email": {
                return (
                    <InputBox
                        onChange={(event: any) => setEmail(event.target.value)}
                        placeholder="New Email"
                        type="text"
                    />
                );
            }
            case "phoneNumber": {
                return (
                    <InputBox
                        onChange={(event: any) => setPhoneNumber(event.target.value)}
                        placeholder="New Phone Number"
                        type="text"
                    />
                );
            }
            default: {
                return null;
            }
        }
    };

    return (
        <FormCard>
            <div className="InputWrapper">{renderInput("username")}</div>
            <div className="InputWrapper">{renderInput("email")}</div>  
            <div className="InputWrapper">{renderInput("phoneNuber")}</div>    

        </FormCard>
    );
}
          


