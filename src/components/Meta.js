import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom';

const MetaTag = (props) => {
  const [metaData, setData] = useState({})
  const history = useHistory();
    // const { slug } = useParams();

  useEffect(() => {
    const path = props.path || history.location.pathname;
        let url = "";
            url = 'http://localhost:5000/api' + path;
        
        try {
            // console.log("PROPS", slug);
            console.log("PROPS URL", url);
            axios.get(url).then((res,err) => {
                console.log("Res", res);
                // console.log("Error", err);
                setData(res.data);
            });
        } catch (err) { console.log("ERRORS", err);}
    }, [props.path]);

    const renderMeta=()=>
    {
        let metaDats = [];
        let title = null;
        if (metaData?.title) {
            title = (
              <title id="title" data-react-helmet="true">
                {metaData.title}
              </title>
            );
          }
      
          if (metaData?.description) {
            metaDats = Object.assign(metaDats, {
              [Object.keys(metaDats).length]: (
                <meta
                  name="description"
                  content={metaData.description}
                  data-react-helmet="true"
                />
              ),
            });
          }
      
          if (metaData?.ogDescription) {
            metaDats = Object.assign(metaDats, {
              [Object.keys(metaDats).length]: (
                <meta
                  property="og:Description"
                  content={metaData.ogDescription}
                  data-react-helmet="true"
                />
              ),
            });
          }
      
          if (metaData?.keywords) {
            metaDats = Object.assign(metaDats, {
              [Object.keys(metaDats).length]: (
                <meta
                  name="keywords"
                  content={metaData.keywords}
                  data-react-helmet="true"
                />
              ),
            });
          }
        
          if (title) {
            if (metaDats) {
              metaDats = Object.assign(metaDats, {
                [Object.keys(metaDats).length]: title,
              });
            } else {
              return title;
            }
          }
      
        console.log("HOHOHOHO", metaDats);
        return metaDats;
    }
    
    return (
        <Helmet>
            
            {renderMeta()}
            {/* <meta name="description" content="Apps In  this" /> */}
        </Helmet>
    );
}

export default MetaTag;