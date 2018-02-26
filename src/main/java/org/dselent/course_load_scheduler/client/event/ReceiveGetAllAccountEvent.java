package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveGetAllAccountAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveGetAllAccountEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class ReceiveGetAllAccountEvent extends GwtEvent<ReceiveGetAllAccountEventHandler>{
	public static Type<ReceiveGetAllAccountEventHandler> TYPE = new Type<ReceiveGetAllAccountEventHandler>();
	
	private ReceiveGetAllAccountAction action;
	
	public ReceiveGetAllAccountEvent(ReceiveGetAllAccountAction action)
	{
		this.action = action;
	}
	
	public ReceiveGetAllAccountAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveGetAllAccountEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveGetAllAccountEventHandler handler)
	{
		handler.onReceiveGetAllAccount(this);
	}

}
