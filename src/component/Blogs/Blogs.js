import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>

            <div className='row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                <div className='col mb-4'>
                    <div className='card h-100 shadow rouded'>
                        <div className='card-body pb-5'>
                            <h5 className='fw-bold text-center'> What Is the Difference Between Authorization and Authentication?</h5>
                            <p className='fw-bold fs-6 pt-4'>Authorization</p>
                            <ol>

                                <li>Authorization determines what resources a user can access.</li>
                                <li>Authorization always takes place after authentication.</li>
                                <li>Authorization isn’t visible to or changeable by the user.</li>
                                <li>Authorization works through settings that are implemented and maintained by the organizatioli.</li>
                            </ol>
                            <p className='fw-bold fs-6 pt-2'>Authentication</p>
                            <ol>
                                <li>Authentication verifies who the user is.	</li>
                                <li>Authentication is the first step of a good identity and access management process.	</li>
                                <li>Authentication is visible to and partially changeable by the user.	</li>
                                <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.	</li>
                            </ol>


                        </div>
                    </div>
                </div>
                <div className='col mb-4'>
                    <div className='card h-100 shadow rouded'>
                        <div className='card-body pb-5'>
                            <h5 className='fw-bold text-center'>Why you use firebase?What other options do you have to implement authentication?</h5>
                            <p>I used firebase authentication because of it provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.In authentication, the user or computer has to prove its identity to the server or client.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.Authentication by a client usually involves the server giving a certificate to the client in which a trusted third party such as Verisign or Thawte states that the server belongs to the entity (such as a bank) that the client expects it to.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col mb-4'>
                    <div className='card h-100 shadow rouded'>
                        <div className='card-body pb-5'>
                            <h5 className='fw-bold text-center'>What other services does firebase provider other than authentication?</h5>
                            <p>
                                Firebase works out-of-the-box with Firebase services, including Cloud Functions, Authentication, Realtime Database, Cloud Firestore, and Cloud Messaging. You can build powerful microservices and web apps using these complementary Firebase services.Pair Firebase Hosting with Cloud Functions to build microservices using the Express.js framework. This pairing allows you to host your microservices and APIs on Firebase. In addition, you can use a deep integration with Cloud Firestore to build very powerful forms and web apps which can update data in real time.Appwrite is a backend server for Flutter, Mobile, and Web developers. It is open-source, secure, and provides a self-hosting solution that is easy to use. It is a great open source Firebase alternative. Appwrite supports multiple SDKs, including Flutter, Web, Apple, and Android</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;