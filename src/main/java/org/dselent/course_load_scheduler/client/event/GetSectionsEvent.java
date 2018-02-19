package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.GetSectionsAction;
import org.dselent.course_load_scheduler.client.event_handler.GetSectionsEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class GetSectionsEvent extends GwtEvent<GetSectionsEventHandler>{
	public static Type<GetSectionsEventHandler> TYPE = new Type<GetSectionsEventHandler>();
	
	private GetSectionsAction action;
	
	public GetSectionsEvent(GetSectionsAction action)
	{
		this.action = action;
	}
	
	public GetSectionsAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<GetSectionsEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(GetSectionsEventHandler handler)
	{
		handler.onGetSections(this);
	}
}
