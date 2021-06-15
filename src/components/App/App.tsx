import React, { Fragment } from 'react';
import {
  Layout,
  Cell,
  Page,
  Breadcrumbs,
  Button,
  Card,
  FormField,
  Input,
  Heading,
  Dropdown,
  AddItem,
  IconButton,
  Text,
  Box,
} from 'wix-style-react';
import DeleteSmall from 'wix-ui-icons-common/DeleteSmall';

export default () => (
  <Fragment>
    <Box padding={8} backgroundColor="#f0f4f7">
      <Layout>
        <Cell>
          <Layout>
            <Cell>
              <Page.Header
                title={<Heading appearance="H1">WSR Form</Heading>}
                breadcrumbs={
                  <Breadcrumbs
                    activeId="3"
                    items={[
                      { id: '1', value: 'Root Page' },
                      { id: '2', value: 'WSR Form' },
                    ]}
                    onClick={() => {}}
                  />
                }
                actionsBar={
                  <Fragment>
                    <Button priority="secondary">Clear</Button>
                    <Button>Submit</Button>
                  </Fragment>
                }
              />
            </Cell>
          </Layout>
        </Cell>
        <Cell>
          <Layout>
            <Cell span={8}>
              <Card>
                <Card.Header title="General Info"></Card.Header>
                <Card.Divider></Card.Divider>
                <Card.Content>
                  <Layout cols={1}>
                    <Cell>
                      <Layout>
                        <Cell span={6}>
                          <FormField label="First Name" required>
                            <Input size="medium" placeholder="" required />
                          </FormField>
                        </Cell>
                        <Cell span={6}>
                          <FormField label="Last Name" required>
                            <Input size="medium" placeholder="" required />
                          </FormField>
                        </Cell>
                      </Layout>
                    </Cell>
                    <Cell>
                      <Heading appearance="H5">ADDITIONAL INFO</Heading>
                    </Cell>
                    <Cell>
                      <Layout>
                        <Cell span={10}>
                          <FormField label="Favorite color">
                            <Dropdown
                              size="medium"
                              placeholder="Choose a color"
                              options={[
                                { id: 0, value: 'Green' },
                                { id: 1, value: 'Yellow' },
                                { id: 2, value: 'Blue' },
                              ]}
                            />
                          </FormField>
                        </Cell>
                        <Cell span={2}>
                          <Box
                            direction="vertical"
                            verticalAlign="bottom"
                            marginBottom={0}
                          >
                            <IconButton
                              size="small"
                              disabled
                              priority="secondary"
                            >
                              <DeleteSmall />
                            </IconButton>
                          </Box>
                        </Cell>
                      </Layout>
                    </Cell>
                    <Cell>
                      <AddItem>Add Item</AddItem>
                    </Cell>
                  </Layout>
                </Card.Content>
              </Card>
            </Cell>
            <Cell span={4}>
              <Card>
                <Card.Header
                  title="Role Details"
                  suffix={
                    <Button priority="secondary" disabled>
                      Edit
                    </Button>
                  }
                ></Card.Header>
                <Card.Divider></Card.Divider>
                <Card.Content>
                  <Heading appearance="H6">OFFICIAL TITLE</Heading>
                  <Text>Keyboard anihilator</Text>
                  <Heading appearance="H6">EXPERIENCE</Heading>
                  <Text>It's over nine thousand</Text>
                </Card.Content>
              </Card>
            </Cell>
          </Layout>
        </Cell>
      </Layout>
    </Box>
  </Fragment>
);
