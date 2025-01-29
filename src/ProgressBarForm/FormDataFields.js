export const FormDataFields =  [
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
    },
    {
        label: "Hobbies",
        name: 'hobbies',
        placeholder : "Enter your hobbies",
        type : 'text',
        validation : {
            required : true,
            message : 'Hobbies must be a string'
        }
    },
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
    },

    {
        label: 'Secondary Username',
        name : 'Secondary Username',
        type : 'text',
        placeholder : 'Enter your Secondary Username',
        validation : {
            required : true,
            message : 'Secondary  must be a string'
        }
    },
    
    {
        label: 'Secondary Password',
        name : 'Secondary Password',
        type : 'text',
        placeholder : 'Enter your Secondary Password',
        validation : {
            required : true,
            message : 'Secondary Password must be a string'
        }
    },
    {
        label: 'Releam',
        name : 'Releam',
        type : 'text',
        placeholder : 'Enter your Releam',
        validation : {
            required : true,
            message : 'Releam must be a string'
        }
    },
    {
        label: 'Role',
        name : 'Role',
        type : 'text',
        placeholder : 'Enter your Role',
        validation : {
            required : true,
            message : 'Role must be a string'
        }
    },
]