import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div id="App" className="container-fluid">
{/*
* @todo Modular-ize repositories
* @body The use "App" as a function for specific purposes
* ie - OCR, GPS, Flows etc
*/}
        <div className="navbar navbar-dark bg-dark">
          {/* Navigation Header - dark */}
        </div>

        <div className="Page container-fluid">
          {/* Page container - this should probably hold the state */}
          <div className="image container">
          
          <a href="https://sportshub.cbsistatic.com/i/r/2019/04/02/9859bc26-7ec0-4d2c-ba26-ff4463036ba9/thumbnail/770x433/cf0fea55358537725d9ff5439c6d7198/dundon1.jpg">
          <img className="img-fluid" src="https://sportshub.cbsistatic.com/i/r/2019/04/02/9859bc26-7ec0-4d2c-ba26-ff4463036ba9/thumbnail/770x433/cf0fea55358537725d9ff5439c6d7198/dundon1.jpg" alt="AAF operations suspended, future of Alliance in doubt with two weeks left in inaugural regular season - CBS Sports" />
          </a>
          
          <a href="https://cnet1.cbsistatic.com/img/iNUUzVmW9pPjuxbPxGGro8_99EI=/756x567/2019/04/02/c964d328-1a85-44df-95ea-0d14dd6a2db1/spark-email-on-iphone-xs-max.jpg">
          <img className="img-fluid" src="https://cnet1.cbsistatic.com/img/iNUUzVmW9pPjuxbPxGGro8_99EI=/756x567/2019/04/02/c964d328-1a85-44df-95ea-0d14dd6a2db1/spark-email-on-iphone-xs-max.jpg" alt="Google Inbox is dead. But you can use Spark and Spike apps instead - CNET" />
          </a>

          <a href="https://media2.foxnews.com/BrightCove/694940094001/2019/04/02/694940094001_6021780170001_6021777781001-vs.jpg">
          <img className="img-fluid" src="https://media2.foxnews.com/BrightCove/694940094001/2019/04/02/694940094001_6021780170001_6021777781001-vs.jpg" alt="Woman arrested at Mar-a-Lago Club with 2 Chinese passports, malware, feds say - Fox News" />
          </a>

          <a href="https://cdn.cnn.com/cnnnext/dam/assets/190402134900-texas-harris-county-chemical-plant-fire-super-tease.jpg">
          <img className="img-fluid" src="https://cdn.cnn.com/cnnnext/dam/assets/190402134900-texas-harris-county-chemical-plant-fire-super-tease.jpg" alt="Chemical plant fire near Houston kills 1 - CNN" />
          </a>

          <a href="https://cdn.cnn.com/cnnnext/dam/assets/190402123615-amazon-whole-foods-restricted-super-tease.jpg">
          <img className="img-fluid" src="https://cdn.cnn.com/cnnnext/dam/assets/190402123615-amazon-whole-foods-restricted-super-tease.jpg" alt="Amazon is struggling to convince Prime members to go to Whole Foods. So it's slashing prices - CNN" />
          </a>

          <a href="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/chickenpox-vaccine-court-1554154984.png?crop=1.00xw:1.00xh;0,0&resize=1200">
          <img className="img-fluid" src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/chickenpox-vaccine-court-1554154984.png?crop=1.00xw:1.00xh;0,0&resize=1200:*" alt="NKY chickenpox ruling: Unvaccinated student’s request to go back to school denied - WLWT Cincinnati" />
          </a>

          <a href="https://www.aljazeera.com/mritems/Images/2019/4/2/faa6ed488b0340a9a26517e814ecb8d1_18.jpg">
          <img className="img-fluid" src="https://www.aljazeera.com/mritems/Images/2019/4/2/faa6ed488b0340a9a26517e814ecb8d1_18.jpg" alt="Algeria's Bouteflika resigns amid mass protests - state media - Aljazeera.com" />
          </a>

          <a href="https://i.ytimg.com/vi/p4nPhygveAo/maxresdefault.jpg">
          <img className="img-fluid" src="https://i.ytimg.com/vi/p4nPhygveAo/maxresdefault.jpg" alt="Bradley Beal says he's the 2nd-best SG in the NBA behind James Harden; is he? | The Jump - ESPN" />
          </a>

          <a href="https://www.sciencenews.org/sites/default/files/2019/04/main/articles/040219_cg_dinosaur_feat.jpg">
          <img className="img-fluid" src="https://www.sciencenews.org/sites/default/files/2019/04/main/articles/040219_cg_dinosaur_feat.jpg" alt="New fossils may capture the aftermath of the dino-killing asteroid - Science News" />
          </a>

          <a href="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0406%2Fr71360_1296x729_16%2D9.jpg">
          <img className="img-fluid" src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0406%2Fr71360_1296x729_16%2D9.jpg" alt="Out of magic, Wizards fire prez Ernie Grunfeld - ESPN" />
          </a>

          <a href="https://i.guim.co.uk/img/media/daa539f379903d36a434ae424827f54227e6d309/0_25_3510_2106/master/3510.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=3c13a420b9b83632cc336147b70f54ce">
          <img className="img-fluid" src="https://i.guim.co.uk/img/media/daa539f379903d36a434ae424827f54227e6d309/0_25_3510_2106/master/3510.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=3c13a420b9b83632cc336147b70f54ce" alt="Julian Assange has 'repeatedly violated' asylum terms, Ecuador's president says - The Guardian" />
          </a>

          <a href="https://thinkprogress.org/wp-content/uploads/2019/04/GettyImages-1084718214.jpg?w=1920&h=1080&crop=1">
          <img className="img-fluid" src="https://thinkprogress.org/wp-content/uploads/2019/04/GettyImages-1084718214.jpg?w=1920&h=1080&crop=1" alt="Alabama clinic calls judge’s bluff after he allowed a man to sue on behalf of aborted embryo - ThinkProgress" />
          </a>

          <a href="https://www.androidpolice.com/wp-content/uploads/2019/04/callscreen2.png">
          <img className="img-fluid" src="https://www.androidpolice.com/wp-content/uploads/2019/04/callscreen2.png" alt="Google likely to enable Call Screen on Android One phones by Motorola and Nokia - Android Police" />
          </a>

          <a href="https://cdn.cnn.com/cnnnext/dam/assets/190123091903-02-trump-pelosi-0123--super-tease.jpg">
          <img className="img-fluid" src="https://cdn.cnn.com/cnnnext/dam/assets/190123091903-02-trump-pelosi-0123--super-tease.jpg" alt="Trump now says Congress must act to keep southern border open - CNN" />
          </a>

          <a href="http://static-28.sinclairstoryline.com/resources/media/ed5702b5-536d-463e-9330-e9623c494795-large16x9_Stockimageofmeasles.jpg?1554235417131">
          <img className="img-fluid" src="http://static-28.sinclairstoryline.com/resources/media/ed5702b5-536d-463e-9330-e9623c494795-large16x9_Stockimageofmeasles.jpg?1554235417131" alt="CDC: Massachusetts measles patient visited two Maine businesses - WGME" />
          </a>

          <a href="https://cdn.vox-cdn.com/thumbor/5WVDgS8WNDUZkxo_MKtttGpupLY=/0x0:3865x2024/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16003520/1139951102.jpg.jpg">
          <img className="img-fluid" src="https://cdn.vox-cdn.com/thumbor/5WVDgS8WNDUZkxo_MKtttGpupLY=/0x0:3865x2024/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16003520/1139951102.jpg.jpg" alt="Brexit news: Prime Minister Theresa May changes course on Brexit - Vox.com" />
          </a>

          <a href="https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-04%252F7fcb4c50-5582-11e9-bddd-9e6e2cdace74%26client%3Da1acac3e1b3290917d92%26signature%3Dd070c871be573d883c5030e294d055988b1d4d54&client=amp-blogside-v2&signature=e8b8447d1db75e8989dd367dfa4d84ab1a1661e0">
          <img className="img-fluid" src="https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-04%252F7fcb4c50-5582-11e9-bddd-9e6e2cdace74%26client%3Da1acac3e1b3290917d92%26signature%3Dd070c871be573d883c5030e294d055988b1d4d54&client=amp-blogside-v2&signature=e8b8447d1db75e8989dd367dfa4d84ab1a1661e0" alt="Oscars limits for streaming movies may violate antitrust law - Engadget" />
          </a>

          <a href="https://static3.seekingalpha.com/images/marketing_images/fair_use_logos_products/sacl_wba_walgreens_boots_alliance_logo_1.png">
          <img className="img-fluid" src="https://static3.seekingalpha.com/images/marketing_images/fair_use_logos_products/sacl_wba_walgreens_boots_alliance_logo_1.png" alt="Walgreens: The Ship Isn't Sinking - Yet - Seeking Alpha" />
          </a>

          <a href="https://cbsnews1.cbsistatic.com/hub/i/r/2019/04/02/24477a26-1e35-4deb-a673-2225f882df38/thumbnail/1200x630/8ad2d7fabdc72cc696c23766e100fdfb/gettyimages-958567776.jpg">
          <img className="img-fluid" src="https://cbsnews1.cbsistatic.com/hub/i/r/2019/04/02/24477a26-1e35-4deb-a673-2225f882df38/thumbnail/1200x630/8ad2d7fabdc72cc696c23766e100fdfb/gettyimages-958567776.jpg" alt="Nipsey Hussle latest news LAPD press conference, confirms suspect Eric Holder gang member, murder was personal matter - CBS News" />
          </a>

          <a href="https://mondrian.mashable.com/2019%252F04%252F02%252F29%252F6ba92e5c13ef467e9a957ee795a22b72.10a3a.jpg%252F1200x630.jpg?signature=GxEmWq7CbZkwIjkBJ4-UdZWOa4Y">
          <img className="img-fluid" src="https://mondrian.mashable.com/2019%252F04%252F02%252F29%252F6ba92e5c13ef467e9a957ee795a22b72.10a3a.jpg%252F1200x630.jpg?signature=GxEmWq7CbZkwIjkBJ4-UdZWOa4Y=" alt="Satellite photos show that Arctic ice cover is pitiful - Mashable" />
          </a>

          </div>

        </div>

      </div>
    );
  }
}
