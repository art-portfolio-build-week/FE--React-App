// URL
export const login = "https://artista-backend.herokuapp.com/api/login";
export const register = "https://artista-backend.herokuapp.com/api/register";

export const fetchAll = "https://artista-backend.herokuapp.com/api/posts";
export const getPostById = id => `https://artista-backend.herokuapp.com/api/posts/${id}`;
export const addPost = "https://artista-backend.herokuapp.com/api/posts";

export const getUser = id => `https://artista-backend.herokuapp.com/api/users/${id}`;

// Error Messages
export const loginInvalid = {
  email: "Please enter a valid email.",
  password: "Your password must atleast be 8 characters long.",
};

export const requiredLogin = {
  email: "An email is required in order to login",
  password: "A password is required in order to login",
};

export const registerInvalid = {
  username: "Please enter a valid name.",
  dob: "Please enter a valid date of birth",
  email: "Please enter a valid email.",
  password: "Your password must atleast be 8 characters long.",
  passwordConfirm: "Your passwords do not match.",
  igHandle: "That is not a valid instagram handle",
  twHandle: "That is not a valid twitter handle",
};

export const registerRequired = {
  username: "An username is required in order to Register",
  dob: "A date of birth is required in order to Register",
  email: "An email is required in order to signup",
  password: "A password is required in order to signup",
  passwordConfirm: "You need to confirm your password before registering",
};
