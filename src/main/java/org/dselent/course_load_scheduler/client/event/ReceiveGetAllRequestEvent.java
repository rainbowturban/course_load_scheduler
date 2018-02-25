package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveGetAllRequestAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveGetAllRequestEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class ReceiveGetAllRequestEvent extends GwtEvent<ReceiveGetAllRequestEventHandler>{
	public static Type<ReceiveGetAllRequestEventHandler> TYPE = new Type<ReceiveGetAllRequestEventHandler>();
	
	private ReceiveGetAllRequestAction action;
	
	public ReceiveGetAllRequestEvent(ReceiveGetAllRequestAction action)
	{
		this.action = action;
	}
	
	public ReceiveGetAllRequestAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveGetAllRequestEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveGetAllRequestEventHandler handler)
	{
		handler.onReceiveGetAllRequest(this);
	}

}
