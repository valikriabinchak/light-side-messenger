describe( "Chat Component E2E Tests", () => {
    beforeEach( () => {
        localStorage.setItem( "token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvYkBleGFtcGxlLmNvbSIsImlhdCI6MTcyOTg4MTMwMiwiZXhwIjoxNzMwMDU0MTAyfQ.3LCbfXARqa8QkdU0uAYKlDZPobMlaY6buiAMEdrw-r0" );

        cy.visit( 'http://localhost:3000/messenger' );
    } );

    it( "should display the chat header with the correct user", () => {

        cy.get( '.chat-header' ).should( 'exist' );
        cy.get( '.chat-header' ).find( '.profile-photo' ).should( 'be.visible' );
    } );

    it( "should send a message after selecting a friend", () => {
        const messageText = "Hello, this is a test message!";

        cy.get( '.contact-list' ).find( '.contact' ).first().click();

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
        cy.get( '.contact-list' ).find( '.contact' ).first().click();

        const messages = [
            { sender: "user@example.com", content: "sss" },
            { sender: "friend@example.com", content: "Hi" },
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
