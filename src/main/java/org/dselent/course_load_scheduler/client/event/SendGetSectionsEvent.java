package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendGetSectionsAction;
import org.dselent.course_load_scheduler.client.event_handler.SendGetSectionsEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendGetSectionsEvent extends GwtEvent<SendGetSectionsEventHandler>{
	public static Type<SendGetSectionsEventHandler> TYPE = new Type<SendGetSectionsEventHandler>();
	
	private SendGetSectionsAction action;
	
	public SendGetSectionsEvent(SendGetSectionsAction action)
	{
		this.action = action;
	}
	
	public SendGetSectionsAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<SendGetSectionsEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(SendGetSectionsEventHandler handler)
	{
		handler.onSendGetSections(this);
	}
}
