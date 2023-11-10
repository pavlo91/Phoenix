import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const uncontrolledCode = `
  <Tabs
    defaultActiveKey="profile"
    id="uncontrolled-tab-example"
    className="mb-3 nav-underline"
  >
      <Tab eventKey="home" title="Home">
        Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
        stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg
        carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
        Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat
        salvia cillum iphone.
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee
        squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes
        anderson artisan four loko farm-to-table craft beer twee. Qui photo booth
        letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl
        cillum PBR. Homo nostrud organic.
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's
        organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify
        pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy
        hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred
        pitchfork.
      </Tab>
  </Tabs>
`;

const controlledCode = `
const ControlledTabsExample = () => {
  const [key, setKey] = useState('home');

  return(
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 nav-underline"
    >
      <Tab eventKey="home" title="Home">
          Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
          stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg
          carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
          Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat
          salvia cillum iphone.
      </Tab>
      <Tab eventKey="profile" title="Profile">
          Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee
          squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes
          anderson artisan four loko farm-to-table craft beer twee. Qui photo booth
          letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl
          cillum PBR. Homo nostrud organic.
      </Tab>
      <Tab eventKey="contact" title="Contact">
          Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's
          organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify
          pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy
          hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred
          pitchfork.
      </Tab>
    </Tabs>
  )
}
render(<ControlledTabsExample />);  
`;

const TabsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Tabs"
        description="Create dynamic tabbed interfaces.Tabs is a higher-level component for quickly creating a Nav matched with a set of TabPanes."
        link={{
          text: 'Tabs on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/components/tabs/`
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Basic Example" />
          <PhoenixDocCard.Body code={uncontrolledCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Controlled Example" />
          <PhoenixDocCard.Body code={controlledCode} noInline />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default TabsExample;
