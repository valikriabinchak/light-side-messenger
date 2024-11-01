describe( "Chat Component E2E Tests", () => {
    beforeEach( () => {
        localStorage.setItem( "token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvYkBleGFtcGxlLmNvbSIsImlhdCI6MTcyOTg4MTMwMiwiZXhwIjoxNzMwMDU0MTAyfQ.3LCbfXARqa8QkdU0uAYKlDZPobMlaY6buiAMEdrw-r0" );
        localStorage.setItem( "email", "me@example.com" );
        cy.visit( 'http://localhost:8080/messenger' );

        cy.intercept( "GET", "http://localhost:3002/friends", {
            statusCode: 200,
            body: [
                {
                    firstName: "Diana",
                    lastName: "Prince",
                    email: "diana@example.com",
                    lastSeen: "2023-10-31T14:00:00Z",
                    imagePath: "/images/diana.png",
                },
                {
                    firstName: "Clark",
                    lastName: "Kent",
                    email: "me@example.com",
                    lastSeen: "2023-10-31T13:30:00Z",
                    imagePath: "/images/clark.png",
                },
            ],
        } ).as( "getFriends" );

        cy.intercept( "GET", "http://localhost:3002/messages?friendEmail=diana@example.com", {
            statusCode: 200,
            body: [
                { senderEmail: "diana@example.com", receiver: "me@example.com", content: "Hey there!", timestamp: "2023-11-01T10:00:00Z" },
                { senderEmail: "me@example.com", receiver: "diana@example.com", content: "Hello!", timestamp: "2023-11-01T10:01:00Z" }
            ],
        } ).as( "getMessages" );

        cy.wait( "@getFriends" );

    } );

    it( "should display the chat header with the correct user", () => {

        cy.get( '.chat-header' ).should( 'exist' );
        cy.get( '.chat-header' ).find( '.profile-photo' ).should( 'be.visible' );
    } );

    it( "should send a message after selecting a friend", () => {
        const messageText = "Hello, this is a test message!";

        cy.get( '.people-tab' ).find( '.contact' ).first().click();

        cy.get( '.message-field' ).type( messageText );

        cy.get( 'button' ).contains( 'Send' ).click();

        cy.get( '.message-area' ).should( 'contain', messageText );
    } );

    it( "should toggle the emoji picker", () => {

        cy.get( '.emoji-btn' ).click();

        cy.get( '.emojiSelector' ).should( 'be.visible' );

        cy.get( '.emoji-btn' ).click();

        cy.get( '.emojiSelector' ).should( 'not.exist' );
    } );

    it( "should show messages from the user and others correctly", () => {
        cy.get( '.people-tab' ).find( '.contact' ).first().click();

        const messages = [
            { sender: "diana@example.com", content: "Hey there!" },
            { sender: "me@example.com", content: "Hello!" },
        ];

        messages.forEach( ( message ) => {
            cy.get( '.message-area' ).should( 'contain', message.content );
        } );
    } );

    it( "should navigate away when the exit button is clicked", () => {
        cy.get( '.exit-btn' ).click();

        cy.url().should( 'include', '/' );
    } );
} );
