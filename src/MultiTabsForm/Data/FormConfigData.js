export const formConfig = {
    Profle : [
        { label: "Age",
          name : 'age',
          type : 'number',
          placeholder : 'Enter your age',
          validation : {
            required : true,
            message : 'Age must be an number'
          }
        },
        {
            label: "E-Mail",
            name: 'email',
            type: 'email',
            placeholder: 'Enter your email',
            validation : {
                required : true,
                message : 'Enter a valid email address'
            }
        }
    ],

    Interest : [
        {
            label: "Hobbies",
            name: 'hobbies',
            placeholder : "Enter your hobbies",
            type : 'text',
            validation : {
                required : true,
                message : 'Hobbies must be a string'
            }
        }
    ],

    Settings : [
        {
            label: 'Username',
            name : 'username',
            type : 'text',
            placeholder : 'Enter your username',
            validation : {
                required : true,
                message : 'Username must be a string'
            }
        },
        {
            label: 'Password',
            name : 'password',
            type : 'password',
            placeholder : 'Enter your Password',
            validation : {
                required : true,
                message : 'Password must be greater than 10 characters'
            }
        }

    ]
}