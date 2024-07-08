import {ReactNode} from "react";
import {ApolloProvider} from "@apollo/client";

interface GraphQLProviderProps {
    children: ReactNode;
    client: any;
}

const GraphQLProvider = (props: GraphQLProviderProps) => {
    const {
        children,
        client
    } = props;

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}


export default GraphQLProvider;