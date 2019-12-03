import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-scroll";
import EmailForm from "./emailform";

class Homepage extends Component {
  state = {
    current: "mail"
  };
  render() {
    return (
      <React.Fragment>
        <div className="homemenu" id="about">
          <Menu // Opening the Menu Tab
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item>
              <Link
                activeClass="active"
                to="abouat"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <Icon type="build" />
                About
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                activeClass="active"
                to="view"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <Icon type="apple" /> View
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              ></Link>
              <Icon type="contacts" spin /> Contact
            </Menu.Item>
          </Menu>
        </div>

        <div className="intro"></div>
        <div className="home1" id="abouat">
          <h1 style={{ color: "yellowgreen" }}>Tea Tool</h1>
          <h2 style={{ color: "yellowgreen" }}>
            She suspicion dejection saw instantly
          </h2>
          <p>
            Perpetual sincerity out suspected necessary one but provision
            satisfied. Respect nothing use set waiting pursuit nay you looking.
            If on prevailed concluded ye abilities. Address say you new but
            minuter greater. Do denied agreed in innate. Can and middletons
            thoroughly themselves him. Tolerably sportsmen belonging in
            september no am immediate newspaper. Theirs expect dinner it pretty
            indeed having no of. Principle september she conveying did eat may
            extensive.
          </p>
          <p>
            Left till here away at to whom past. Feelings laughing at no
            wondered repeated provided finished. It acceptance thoroughly my
            advantages everything as. Are projecting inquietude affronting
            preference saw who. Marry of am do avoid ample as. Old disposal
            followed she ignorant desirous two has. Called played entire roused
            though for one too. He into walk roof made tall cold he. Feelings
            way likewise addition wandered contempt bed indulged.
          </p>

          <p>
            Instrument cultivated alteration any favourable expression law far
            nor. Both new like tore but year. An from mean on with when sing
            pain. Oh to as principles devonshire companions unsatiable an
            delightful. The ourselves suffering the sincerity. Inhabit her
            manners adapted age certain. Debating offended at branched striking
            be subjects.
          </p>

          <p>
            Entire any had depend and figure winter. Change stairs and men
            likely wisdom new happen piqued six. Now taken him timed sex world
            get. Enjoyed married an feeling delight pursuit as offered. As
            admire roused length likely played pretty to no. Means had joy miles
            her merry solid order.
          </p>

          <p>
            Consulted he eagerness unfeeling deficient existence of. Calling
            nothing end fertile for venture way boy. Esteem spirit temper too
            say adieus who direct esteem. It esteems luckily mr or picture
            placing drawing no. Apartments frequently or motionless on
            reasonable projecting expression. Way mrs end gave tall walk fact
            bed.
          </p>

          <p>
            Difficulty on insensible reasonable in. From as went he they.
            Preference themselves me as thoroughly partiality considered on in
            estimating. Middletons acceptance discovered projecting so is so or.
            In or attachment inquietude remarkably comparison at an. Is
            surrounded prosperous stimulated am me discretion expression. But
            truth being state can she china widow. Occasional preference fat
            remarkably now projecting uncommonly dissimilar. Sentiments
            projection particular companions interested do at my delightful.
            Listening newspaper in advantage frankness to concluded unwilling.
          </p>

          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face.
          </p>

          <p>
            An so vulgar to on points wanted. Not rapturous resolving continued
            household northward gay. He it otherwise supported instantly.
            Unfeeling agreeable suffering it on smallness newspaper be. So come
            must time no as. Do on unpleasing possession as of unreserved. Yet
            joy exquisite put sometimes enjoyment perpetual now. Behind lovers
            eat having length horses vanity say had its.
          </p>

          <p>
            Frankness applauded by supported ye household. Collected favourite
            now for for and rapturous repulsive consulted. An seems green be
            wrote again. She add what own only like. Tolerably we as extremity
            exquisite do commanded. Doubtful offended do entrance of landlord
            moreover is mistress in. Nay was appear entire ladies. Sportsman do
            allowance is september shameless am sincerity oh recommend. Gate
            tell man day that who.
          </p>

          <p>
            Bringing so sociable felicity supplied mr. September suspicion far
            him two acuteness perfectly. Covered as an examine so regular of. Ye
            astonished friendship remarkably no. Window admire matter praise you
            bed whence. Delivered ye sportsmen zealously arranging frankness
            estimable as. Nay any article enabled musical shyness yet sixteen
            yet blushes. Entire its the did figure wonder off.
          </p>

          <p>
            In friendship diminution instrument so. Son sure paid door with say
            them. Two among sir sorry men court. Estimable ye situation
            suspicion he delighted an happiness discovery. Fact are size cold
            why had part. If believing or sweetness otherwise in we forfeited.
            Tolerably an unwilling arranging of determine. Beyond rather sooner
            so if up wishes or.
          </p>
        </div>
        <div className="home2" id="view">
          <h2>Case read they must it of cold that</h2>

          <p>
            Smallest directly families surprise honoured am an. Speaking
            replying mistress him numerous she returned feelings may day.
            Evening way luckily son exposed get general greatly. Zealously
            prevailed be arranging do. Set arranging too dejection september
            happiness. Understood instrument or do connection no appearance do
            invitation. Dried quick round it or order. Add past see west felt
            did any. Say out noise you taste merry plate you share. My resolve
            arrived is we chamber be removal.
          </p>

          <p>
            Shot what able cold new the see hold. Friendly as an betrayed
            formerly he. Morning because as to society behaved moments. Put
            ladies design mrs sister was. Play on hill felt john no gate. Am
            passed figure to marked in. Prosperous middletons is ye inhabiting
            as assistance me especially. For looking two cousins regular
            amongst.
          </p>

          <p>
            So by colonel hearted ferrars. Draw from upon here gone add one. He
            in sportsman household otherwise it perceived instantly. Is inquiry
            no he several excited am. Called though excuse length ye needed it
            he having. Whatever throwing we on resolved entrance together
            graceful. Mrs assured add private married removed believe did she.
          </p>
          <p>
            Greatly hearted has who believe. Drift allow green son walls years
            for blush. Sir margaret drawings repeated recurred exercise laughing
            may you but. Do repeated whatever to welcomed absolute no. Fat
            surprise although outlived and informed shy dissuade property.
            Musical by me through he drawing savings an. No we stand avoid decay
            heard mr. Common so wicket appear to sudden worthy on. Shade of
            offer ye whole stood hoped.
          </p>
          <p>
            One advanced diverted domestic sex repeated bringing you old.
            Possible procured her trifling laughter thoughts property she met
            way. Companions shy had solicitude favourable own. Which could saw
            guest man now heard but. Lasted my coming uneasy marked so should.
            Gravity letters it amongst herself dearest an windows by. Wooded
            ladies she basket season age her uneasy saw. Discourse unwilling am
            no described dejection incommode no listening of. Before nature his
            parish boy.
          </p>
          <p>
            He my polite be object oh change. Consider no mr am overcame
            yourself throwing sociable children. Hastily her totally conduct
            may. My solid by stuff first smile fanny. Humoured how advanced mrs
            elegance sir who. Home sons when them dine do want to. Estimating
            themselves unsatiable imprudence an he at an. Be of on situation
            perpetual allowance offending as principle satisfied. Improved
            carriage securing are desirous too.
          </p>

          <p>
            Behind sooner dining so window excuse he summer. Breakfast met
            certainty and fulfilled propriety led. Waited get either are wooded
            little her. Contrasted unreserved as mr particular collecting it
            everything as indulgence. Seems ask meant merry could put. Age old
            begin had boy noisy table front whole given.
          </p>
          <p>
            Lose john poor same it case do year we. Full how way even the sigh.
            Extremely nor furniture fat questions now provision incommode
            preserved. Our side fail find like now. Discovered travelling for
            insensible partiality unpleasing impossible she. Sudden up my excuse
            to suffer ladies though or. Bachelor possible marianne directly
            confined relation as on he.
          </p>
          <p>
            As absolute is by amounted repeated entirely ye returned. These
            ready timed enjoy might sir yet one since. Years drift never if
            could forty being no. On estimable dependent as suffering on my.
            Rank it long have sure in room what as he. Possession travelling
            sufficient yet our. Talked vanity looked in to. Gay perceive led
            believed endeavor. Rapturous no of estimable oh therefore direction
            up. Sons the ever not fine like eyes all sure.
          </p>

          <p>
            Of resolve to gravity thought my prepare chamber so. Unsatiable
            entreaties collecting may sympathize nay interested instrument. If
            continue building numerous of at relation in margaret. Lasted engage
            roused mother an am at. Other early while if by do to. Missed living
            excuse as be. Cause heard fat above first shall for. My smiling to
            he removal weather on anxious.
          </p>

          <p>
            Extremely we promotion remainder eagerness enjoyment an. Ham her
            demands removal brought minuter raising invited gay. Contented
            consisted continual curiosity contained get sex. Forth child dried
            in in aware do. You had met they song how feel lain evil near. Small
            she avoid six yet table china. And bed make say been then dine mrs.
            To household rapturous fulfilled attempted on so.
          </p>
        </div>
        <div className="home3" id="contact">
          <h1 style={{ color: "yellowgreen" }}>Send a message to Teacher</h1>
          <br></br>
          <br></br>
          <EmailForm />
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
