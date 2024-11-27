import { PureComponent } from 'react';
import Sidebar from 'calypso/layout/sidebar';
import SidebarHeading from 'calypso/layout/sidebar/heading';
import SidebarItem from 'calypso/layout/sidebar/item';
import SidebarMenu from 'calypso/layout/sidebar/menu';
import SidebarSeparator from 'calypso/layout/sidebar/separator';

export default class DevdocsSidebar extends PureComponent {
	static displayName = 'DevdocsSidebar';

	isItemSelected( itemPath, isStrict = true ) {
		const { path } = this.props;

		if ( isStrict ) {
			return path === itemPath;
		}

		return path.indexOf( itemPath ) === 0;
	}

	render() {
		return (
			<Sidebar>
				<a href="/devdocs">
					<h1 className="devdocs__title">Calypso Docs</h1>
				</a>
				<SidebarMenu>
					<SidebarItem
						className="devdocs__navigation-item"
						icon="search"
						label="Search"
						link="/devdocs"
						selected={ this.isItemSelected( '/devdocs' ) }
					/>
					<SidebarItem
						className="devdocs__navigation-item"
						icon="location"
						label="The Calypso Guide"
						link="/devdocs/docs/guide/index.md"
						selected={ this.isItemSelected( '/devdocs/docs/guide', false ) }
					/>
					<SidebarItem
						className="devdocs__navigation-item"
						icon="pencil"
						label="Contributing"
						link="/devdocs/docs/CONTRIBUTING.md"
						selected={ this.isItemSelected( '/devdocs/docs/CONTRIBUTING.md' ) }
					/>
					<SidebarItem
						className="devdocs__navigation-item"
						icon="multiple-users"
						label="Accessibility"
						link="/devdocs/docs/accessibility.md"
						selected={ this.isItemSelected( '/devdocs/docs/accessibility.md' ) }
					/>
					<SidebarItem
						className="devdocs__navigation-item"
						icon="ink"
						label="Color"
						link="/devdocs/docs/color.md"
						selected={ this.isItemSelected( '/devdocs/docs/color.md' ) }
					/>
					<SidebarItem
						className="devdocs__navigation-item"
						icon="heading"
						label="Typography"
						link="/devdocs/typography"
						selected={ this.isItemSelected( '/devdocs/typography' ) }
					/>
					<SidebarItem
						className="devdocs__navigation-item"
						icon="types"
						label="Icons"
						link="/devdocs/docs/icons.md"
						selected={ this.isItemSelected( '/devdocs/docs/icons.md' ) }
					/>
					<SidebarItem
						className="devdocs__navigation-item"
						icon="image"
						label="Illustrations"
						link="/devdocs/illustrations"
						selected={ this.isItemSelected( '/devdocs/illustrations' ) }
					/>
					<SidebarItem
						className="devdocs__navigation-item"
						icon="globe"
						label="Internationalization"
						link="/devdocs/docs/i18n.md"
						selected={ this.isItemSelected( '/devdocs/docs/i18n.md' ) }
					/>
					<SidebarItem
						className="devdocs__navigation-item"
						icon="bug"
						label="Testing"
						link="/devdocs/docs/testing/index.md"
						selected={ this.isItemSelected( '/devdocs/docs/testing', false ) }
					/>
					<SidebarSeparator />

					<SidebarHeading>Live Docs</SidebarHeading>

					<SidebarItem
						className="devdocs__navigation-item"
						icon="layout-blocks"
						label="UI Components"
						link="/devdocs/design"
						selected={ this.isItemSelected( '/devdocs/design', false ) }
					/>
					<SidebarItem
						className="devdocs__navigation-item"
						icon="custom-post-type"
						label="Blocks"
						link="/devdocs/blocks"
						selected={ this.isItemSelected( '/devdocs/blocks', false ) }
					/>
					<SidebarItem
						className="devdocs__navigation-item"
						icon="code"
						label="Playground"
						link="/devdocs/playground"
						selected={ this.isItemSelected( '/devdocs/playground', false ) }
					/>
					<SidebarItem
						className="devdocs__navigation-item"
						icon="image-multiple"
						label="WordPress Components"
						link="/devdocs/wordpress-components-gallery"
						selected={ this.isItemSelected( '/devdocs/wordpress-components-gallery', false ) }
					/>
					<SidebarSeparator />

					<SidebarHeading>Developer Tools</SidebarHeading>
					<SidebarItem
						className="devdocs__navigation-item"
						icon="plugins"
						label="State Selectors"
						link="/devdocs/selectors"
						selected={ this.isItemSelected( '/devdocs/selectors', false ) }
					/>
				</SidebarMenu>
			</Sidebar>
		);
	}
}
