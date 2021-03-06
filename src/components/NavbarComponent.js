import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">OMK St. Lukas Pemalang</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/home/">Beranda</NavLink>
            </NavItem>
             <NavItem>
              <NavLink href="/jadwalkegiatan/">Jadwal Kegiatan</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/renungan/">Renungan</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Berita</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/galeri/">Galeri</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tampiladmin/">Data Admin</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Anggota OMK
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                 <NavLink href="/jadwalkegiatan/">Lingkungan Maria</NavLink>
                </DropdownItem>
                <DropdownItem>
                  Lingkungan Ignasius
                </DropdownItem>
                <DropdownItem>
                  Lingkungan Petrus
                </DropdownItem>
                <DropdownItem>
                  Lingkungan Emanuel
                </DropdownItem>
                <DropdownItem>
                  Lingkungan Markus
                </DropdownItem>
                <DropdownItem>
                  Lingkungan Yohanes
                </DropdownItem>
                <DropdownItem>
                  Lingkungan Stefanus
                </DropdownItem>
                <DropdownItem>
                  Lingkungan Paulus
                </DropdownItem>
                <DropdownItem>
                  Lingkungan Maria
                </DropdownItem>
                <DropdownItem>
                  Lingkungan Benedictus
                </DropdownItem>
                <DropdownItem>
                  Lingkungan Yohanes (stasi Comal)
                </DropdownItem>
                <DropdownItem>
                  Lingkungan Stefanus (Stasi Comal)
                </DropdownItem>
                <DropdownItem>
                  Stasi Randudongkal
                </DropdownItem>
                <DropdownItem>
                  Stasi Tamansari
                </DropdownItem>
                <DropdownItem>
                  Stasi Kepuh
                </DropdownItem>
                <DropdownItem>
                  Stasi Muncang
                </DropdownItem>
                <DropdownItem>
                  Stasi Bantarbolang
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavItem>
              <NavLink href="/logout/">Logout</NavLink>
            </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;