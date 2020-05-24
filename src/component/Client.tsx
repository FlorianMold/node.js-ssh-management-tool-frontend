import {ClientModel} from "../model/ClientModel";
import React from "react";
import {Box, Flex} from "rebass";

type ClientProps = { clients: ClientModel[] }

const Client = ({clients}: ClientProps) => (
    <>
        {
            clients.map(client =>
                <Flex>
                    <Box
                        p={3}
                        margin={1}
                        width={0.25}
                        bg={"gray"}>
                        {client.toString()}
                    </Box>

                </Flex>
            )
        }
    </>
)

export default Client;