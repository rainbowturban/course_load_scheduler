package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveGetSectionsAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveGetSectionsEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveGetSectionsEvent extends GwtEvent<ReceiveGetSectionsEventHandler>{
	public static Type<ReceiveGetSectionsEventHandler> TYPE = new Type<ReceiveGetSectionsEventHandler>();
	
	private ReceiveGetSectionsAction action;
	
	public ReceiveGetSectionsEvent(ReceiveGetSectionsAction action)
	{
		this.action = action;
	}
	
	public ReceiveGetSectionsAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveGetSectionsEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveGetSectionsEventHandler handler)
	{
		handler.onReceiveGetSections(this);
	}

}
