import {
  Button,
  Divider,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Search,
  Segment,
  Placeholder,
  List,
  Label,
  Menu,
  Table,
  Container,
} from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon>
                <Icon name='search' />
                Find Country
              </Header>

              <Search placeholder='Search countries...' />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name='file pdf outline' />
                Tambah Dokumen Baru
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Grid relaxed>
        <GridRow>
          <GridColumn width={5}>
            <Segment>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </GridColumn>
          <GridColumn width={7}>
            <Segment>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </GridColumn>
          <GridColumn width={4}>
            <h3>Website Terkait</h3>
            <List>
              <List.Item as='a'><Icon name='linkify' /> Google</List.Item>
              <List.Item as='a'><Icon name='linkify' /> Facebook</List.Item>
              <List.Item as='a'><Icon name='linkify' /> Semantic UI</List.Item>
              <List.Item as='a'><Icon name='linkify' /> Niomic</List.Item>
              <List.Item as='a'><Icon name='linkify' /> React</List.Item>
            </List>
          </GridColumn>
        </GridRow>
      </Grid>

      <Container style={{ marginTop: '1rem' }}>
        <Table celled>
          <Table.Header>
            <Table.Row textAlign='right'>
              <Table.HeaderCell colSpan='3' textAlign='right'>
                <Search placeholder='Search countries...' />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>Nama Document</Table.HeaderCell>
              <Table.HeaderCell>Jenis File</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell style={{backgroundColor:"#F5F5DC"}}>
                <Label ribbon>Panduan Belajar Javascript</Label>
              </Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar CSS</Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar React JS</Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
    </div>
  );
}

export default App;
