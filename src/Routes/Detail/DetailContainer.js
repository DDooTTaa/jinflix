import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api.js";

export default class extends React.Component {
    constructor(props) {
        super(props);
        const { location: { pathname } } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie")
        };
    }

    async componentDidMount() {
        const { match: {
            params: { id }
        },
            history: { push },
            location: { pathname }
        } = this.props;
        const { isMovie } = this.state;
        const parseId = parseInt(id);
        if (isNaN(parseId)) {
            return push("/");
        }
        let result = null;
        try {
            if (isMovie) {
                const request = await moviesApi.movieDetail(parseId);
                result = request.data;
            } else {
                const request = await tvApi.showDetail(parseId);
                result = request.data;
            }

        } catch {
            this.setState({ error: "can't find" })
        } finally {
            this.setState({ loading: false, result });
        }
    }
    render() {
        const { result, error, loading } = this.state;
        console.log(this.state);
        console.log(result);
        return <DetailPresenter
            result={result}
            error={error}
            loading={loading}
        />
    }
}

