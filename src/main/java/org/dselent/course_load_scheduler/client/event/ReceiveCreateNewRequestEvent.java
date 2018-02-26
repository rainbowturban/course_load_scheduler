package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveCreateNewRequestAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveCreateNewRequestEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class ReceiveCreateNewRequestEvent extends GwtEvent<ReceiveCreateNewRequestEventHandler>{
	public static Type<ReceiveCreateNewRequestEventHandler> TYPE = new Type<ReceiveCreateNewRequestEventHandler>();
	
	private ReceiveCreateNewRequestAction action;
	
	public ReceiveCreateNewRequestEvent(ReceiveCreateNewRequestAction action)
	{
		this.action = action;
	}
	
	public ReceiveCreateNewRequestAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveCreateNewRequestEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveCreateNewRequestEventHandler handler)
	{
		handler.onReceiveCreateNewRequest(this);
	}
}
