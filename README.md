

---

# <p align="center">Eventique</span> : Your Ultimate Event Mangement System</p>
<p align="center">
    <p align="center">
        <a href="https://github.com/Sujan-Koirala021/eventique" target="blank">
            <img src="https://img.shields.io/github/watchers/Sujan-Koirala021/eventique?style=for-the-badge&logo=appveyor" alt="Watchers"/>
        </a>
        <a href="https://github.com/Sujan-Koirala021/eventique" target="blank">
            <img src="https://img.shields.io/github/forks/Sujan-Koirala021/eventique?style=for-the-badge&logo=appveyor" alt="Forks"/>
        </a>
        <a href="https://github.com/Sujan-Koirala021/eventique/stargazers" target="blank">
            <img src="https://img.shields.io/github/stars/Sujan-Koirala021/eventique?style=for-the-badge&logo=appveyor" alt="Star"/>
        </a>
    </p>
    <p align="center">
        <a href="https://github.com/Sujan-Koirala021/eventique/issues" target="blank">
            <img src="https://img.shields.io/github/issues/Sujan-Koirala021/eventique?style=for-the-badge&logo=appveyor" alt="Issue"/>
        </a>
        <a href="https://github.com/Sujan-Koirala021/eventique/pulls" target="blank">
            <img src="https://img.shields.io/github/issues-pr/Sujan-Koirala021/eventique?style=for-the-badge&logo=appveyor" alt="Open Pull Request"/>
        </a>
    </p>
    <p align="center">
        <a href="https://github.com/Sujan-Koirala021/eventique/blob/master/LICENSE" target="blank">
            <img src="https://img.shields.io/github/license/Sujan-Koirala021/eventique?style=for-the-badge&logo=appveyor" alt="License" />
        </a>
    </p>
</p>


## Introduction
Eventique is a comprehensive event management system that streamlines the process of planning, organizing, and managing events. Whether you're coordinating a corporate event, a wedding, or a community gathering, Eventique provides all the tools you need to ensure your event runs smoothly. With its user-friendly interface and powerful features, Eventique is your go-to solution for all your event management needs.


## Problem Statement

Despite the availability of numerous event management systems, many lack robust access control mechanisms, leading to security vulnerabilities and operational inefficiencies. Without an effective Role-Based Access Control (RBAC) system, organizations face challenges such as unauthorized access, data breaches, and inability to delegate tasks efficiently. These issues can result in mismanaged events, financial losses, and damage to reputations.

## Objectives

Develop an event management system with a comprehensive Role-Based Access Control (RBAC) framework to address the following challenges:

1. **Unauthorized Access**: Prevent unauthorized users from accessing sensitive event data or performing critical actions such as creating, editing, or deleting events.
   
2. **Efficient Delegation**: Enable efficient task delegation by assigning specific roles and permissions to users based on their responsibilities and expertise.

3. **Scalability**: Ensure the RBAC system can scale to accommodate organizations of varying sizes, from small teams to large enterprises with complex hierarchies.

4. **User Management**: Provide an intuitive interface for administrators to manage user roles and permissions easily, including adding, modifying, and removing users and roles.

5. **Audit and Compliance**: Maintain detailed logs of user activities for auditing purposes, ensuring compliance with organizational policies and industry regulations.

## Key Features

To address the identified challenges, the event management system will include the following key features:

1. **Role Definition**: Define roles such as Admin, Event Manager, Coordinator, and Guest, each with specific permissions.
   
2. **Permission Assignment**: Assign granular permissions to roles, such as the ability to create, edit, view, or delete events and manage user access.


3. **Access Control Policies**: Implement policies that restrict access to event data and management functionalities based on user roles.

4. **Audit Logs**: Maintain comprehensive logs of user actions, including changes to events and user roles, to facilitate auditing and compliance checks.

5. **Scalable Architecture**: Design the RBAC system to handle increasing numbers of users and roles as the organization grows.

## Expected Outcomes

By implementing an event management system with a Permit.io, organizations can expect:

1. **Improved Security**: Enhanced security through controlled access to event data and management functionalities, reducing the risk of unauthorized actions and data breaches.

2. **Operational Efficiency**: Greater operational efficiency by ensuring that tasks are delegated appropriately based on user roles and responsibilities.

3. **Ease of Management**: Simplified user and role management through an intuitive interface, allowing administrators to manage access control effectively.

4. **Regulatory Compliance**: Improved compliance with organizational policies and industry regulations through detailed audit logs and access control mechanisms.

5. **Scalability and Flexibility**: A scalable system that can grow with the organization, accommodating new roles and users as needed.


## Demo
<video src="https://github.com/Sujan-Koirala021/eventique/assets/84112374/3893ea4d-6218-4d13-8b1f-fd91b797998a"></video>




## Dependencies
- React
- Tailwind
- Express JS
- MongoDB
- Permit.io

## Getting Started

### Installation

#### Clone the repository:
```bash
git clone https://github.com/Sujan-Koirala021/eventique.git
```
#### Go to the repository:
```bash
cd eventique
```

### Run docker container

```bash
docker run -it \
  -p 7766:7000 \
  --env PDP_API_KEY=YOUR_PERMIT_API_KEY \
  --env PDP_DEBUG=True \
  permitio/pdp-v2:latest
```

For demo:
```bash
docker run -it \
  -p 7766:7000 \
  --env PDP_API_KEY=permit_key_dCW6vmOdNa9pOSBslXbcU12lpU4xSDflIxNpVFp5vZF3CFHSwmy12KHYngYueWhk8hIMsOdeDzxmTsIquoEcLp \
  --env PDP_DEBUG=True \
  permitio/pdp-v2:latest
```


### Setup Frontend 

#### Navigate to the client directory:
```bash
cd client
```

#### Install dependencies:
```bash
npm install
```

#### Start the development server:
```bash
npm run dev
```


### Setup Backend 

#### Navigate to the server directory:
```bash
cd server
```

#### Create your own .env file under server directory

```bash
MONGODB_URL=<YOUR_MONGO_URL>
JWT_SECRET=<YOUR_JWT_SECRET_KEY>
PERMIT_KEY=<YOUR_PERMIT_KEY>
```

For demo purpose:
```bash
MONGODB_URL="mongodb+srv://sujan:sujan123@posts.yr8kto8.mongodb.net/"
JWT_SECRET="d5e71c94e14061aca0a120a015e41a922996a07b0705108e2e7ff4ff92ba88f7ce1363ba8e8b909d959606e8263dcc08f4a7ebf39655b2248457864516241942"
PERMIT_KEY=permit_key_dCW6vmOdNa9pOSBslXbcU12lpU4xSDflIxNpVFp5vZF3CFHSwmy12KHYngYueWhk8hIMsOdeDzxmTsIquoEcLp
```


#### Install dependencies:
```bash
npm install
```

#### Start the  server:
```bash
nodemon server
```

## Usage

#### Visit the frontend application:
Open your browser and navigate to `http://localhost:5173/`.




## Screenshots
![1land](https://github.com/Sujan-Koirala021/eventique/assets/84112374/c92dd45b-7afd-4631-b29e-2183a6b22046)
![2about](https://github.com/Sujan-Koirala021/eventique/assets/84112374/5446ac8d-7238-426e-99c5-f25da97f326b)
![3signup](https://github.com/Sujan-Koirala021/eventique/assets/84112374/81d0a910-1894-4fda-a54a-3259742b9db1)
![3dashboard](https://github.com/Sujan-Koirala021/eventique/assets/84112374/a16c07f9-033b-4c3e-b3e1-8854e459a7ff)
![4deny](https://github.com/Sujan-Koirala021/eventique/assets/84112374/c55be7ac-cc75-4dbc-9f49-dbdb4a21825a)
![5newEvent](https://github.com/Sujan-Koirala021/eventique/assets/84112374/f780a187-7457-4de6-a685-e086bd674dc8)



## Contributing

We welcome contributions from the community! If you'd like to contribute to Eventique, please follow these steps:

1. **Fork the Repository**: Click the "Fork" button on GitHub to create your copy.

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/Sujan-Koirala021/eventique.git
   ```

3. **Create a Branch**:
   ```bash
   git checkout -b your-branch-name
   ```

4. **Make Changes**: Implement your changes.

5. **Commit Your Changes**:
   ```bash
   git commit -m "Description of your changes"
   ```

6. **Push Your Changes**:
   ```bash
   git push -u origin your-branch-name
   ```

7. **Create a Pull Request**: Submit your changes for review.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [React](https://reactjs.org/) library for web and native user interfaces
- [Tailwind](https://tailwindcss.com/) for the styling
- [Express JS](https://expressjs.com/) for the fast and efficient web framework
- [Mongoo DB](https://www.mongodb.com/docs/) for database


---

