package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveGetOwnRequestAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveGetOwnRequestEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class ReceiveGetOwnRequestEvent extends GwtEvent<ReceiveGetOwnRequestEventHandler>{
	public static Type<ReceiveGetOwnRequestEventHandler> TYPE = new Type<ReceiveGetOwnRequestEventHandler>();
	
	private ReceiveGetOwnRequestAction action;
	
	public ReceiveGetOwnRequestEvent(ReceiveGetOwnRequestAction action)
	{
		this.action = action;
	}
	
	public ReceiveGetOwnRequestAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveGetOwnRequestEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveGetOwnRequestEventHandler handler)
	{
		handler.onReceiveGetOwnRequest(this);
	}

}
