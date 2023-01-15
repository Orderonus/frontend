import React from 'react'
import { BodyListItem, BodyText, CardBodyDiv, CardBtnDiv, CardContainer, CardContainerDone, CardHeaderDiv, HeaderText, HeaderTextDone } from './OrderCardElements'
import {BtnPrimary, BtnSecondary} from "../../../AppComponents"

function OrderCard({id, datetime, items, open}) {
  if (open == true) {
    return (
      <CardContainer>
        <CardHeaderDiv>
          <HeaderText>
            #{id}
          </HeaderText>
          <HeaderText>
            {datetime.getHours()}:{datetime.getMinutes().toString().padStart(2, '0')}
          </HeaderText>
        </CardHeaderDiv>

        <CardBodyDiv>
          {
            items.map((item) => 
              <div>
                <BodyText>
                  {item.qty} x {item.name}
                </BodyText>

                {item.modifiers.map((line) => 
                  <BodyListItem>{line}</BodyListItem>
                )}
              </div>
            )
          }
        </CardBodyDiv>

        <CardBtnDiv>
          <BtnSecondary>Done</BtnSecondary>
        </CardBtnDiv>
      </CardContainer>
    )
  }

  return (
    <CardContainerDone>
      <CardHeaderDiv>
        <HeaderTextDone>
              #{id}
            </HeaderTextDone>
            <HeaderTextDone>
              {datetime.getHours()}:{datetime.getMinutes()}
        </HeaderTextDone>
      </CardHeaderDiv>

      <CardBodyDiv>
        {
          items.map((item) => 
            <div>
              <BodyText>
                {item.qty} x {item.name}
              </BodyText>

              {item.modifiers.map((line) => 
                <BodyListItem>{line}</BodyListItem>
              )}
            </div>
          )
        }
      </CardBodyDiv>

      <CardBtnDiv>
        <BtnPrimary>Undo</BtnPrimary>
      </CardBtnDiv>
    </CardContainerDone>
  )
}

export default OrderCard