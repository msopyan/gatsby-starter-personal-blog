import React from "react";
import PropTypes from "prop-types";

import MainArticle from "../components/common/MainArticle";
import PageHeader from "../components/Page/PageHeader";
import Search from "../components/Search";

const SearchPage = props => {
  const { data } = props;

  return (
    <MainArticle>
      <PageHeader title="Search by" algolia={true} />
      <Search algolia={data.site.siteMetadata.algolia} />
    </MainArticle>
  );
};

SearchPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default SearchPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query AlgoliaQuery {
    site {
      siteMetadata {
        algolia {
          appId
          searchOnlyApiKey
          indexName
        }
      }
    }
  }
`;
