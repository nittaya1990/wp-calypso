/**
 * @group gutenberg
 */

import {
	DataHelper,
	CommentsComponent,
	GutenbergEditorPage,
	TestAccount,
} from '@automattic/calypso-e2e';
import { Browser, Page } from 'playwright';

const quote =
	'The foolish man seeks happiness in the distance. The wise grows it under his feet.\n— James Oppenheim';

declare const browser: Browser;

describe( DataHelper.createSuiteTitle( 'Likes (Comment) ' ), function () {
	const comment = DataHelper.getRandomPhrase();
	let page: Page;
	let publishedURL: URL;
	let commentsComponent: CommentsComponent;
	let gutenbergEditorPage: GutenbergEditorPage;

	beforeAll( async () => {
		page = await browser.newPage();
		gutenbergEditorPage = new GutenbergEditorPage( page );

		const testAccount = new TestAccount( 'simpleSitePersonalPlanUser' );
		await testAccount.authenticate( page );
	} );

	it( 'Go to the new post page', async function () {
		await gutenbergEditorPage.visit( 'post' );
	} );

	it( 'Enter post title', async function () {
		gutenbergEditorPage = new GutenbergEditorPage( page );
		const title = DataHelper.getRandomPhrase();
		await gutenbergEditorPage.enterTitle( title );
	} );

	it( 'Enter post text', async function () {
		await gutenbergEditorPage.enterText( quote );
	} );

	it( 'Publish and visit post', async function () {
		publishedURL = await gutenbergEditorPage.publish( { visit: true } );
		expect( publishedURL.href ).toStrictEqual( page.url() );
	} );

	it( 'Post a comment', async function () {
		commentsComponent = new CommentsComponent( page );
		await commentsComponent.postComment( comment );
	} );

	it( 'Like the comment', async function () {
		await commentsComponent.like( comment );
	} );

	it( 'Unlike the comment', async function () {
		await commentsComponent.unlike( comment );
	} );
} );
