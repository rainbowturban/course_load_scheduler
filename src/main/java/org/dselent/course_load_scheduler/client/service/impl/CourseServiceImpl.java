package org.dselent.course_load_scheduler.client.service.impl;

import org.dselent.course_load_scheduler.client.action.SendGetCourseListAction;
import org.dselent.course_load_scheduler.client.action.SendEditCourseAction;
import org.dselent.course_load_scheduler.client.action.SendNewCourseAction;
import org.dselent.course_load_scheduler.client.action.SendRemoveCourseAction;
import org.dselent.course_load_scheduler.client.callback.SendGetCourseListCallback;
import org.dselent.course_load_scheduler.client.callback.SendEditCourseCallback;
import org.dselent.course_load_scheduler.client.callback.SendNewCourseCallback;
import org.dselent.course_load_scheduler.client.callback.SendRemoveCourseCallback;
import org.dselent.course_load_scheduler.client.event.SendGetCourseListEvent;
import org.dselent.course_load_scheduler.client.event.SendEditCourseEvent;
import org.dselent.course_load_scheduler.client.event.SendNewCourseEvent;
import org.dselent.course_load_scheduler.client.event.SendRemoveCourseEvent;
import org.dselent.course_load_scheduler.client.network.NetworkRequest;
import org.dselent.course_load_scheduler.client.network.NetworkRequestStrings;
import org.dselent.course_load_scheduler.client.service.CourseService;
import org.dselent.course_load_scheduler.client.translator.impl.EditCourseActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.translator.impl.GetCourseListActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.translator.impl.NewCourseActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.translator.impl.RemoveCourseActionTranslatorImpl;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.json.client.JSONObject;

public class CourseServiceImpl extends BaseServiceImpl implements CourseService{
	public CourseServiceImpl()
	{
		
	}
	
	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{
		HandlerRegistration registration;
		
		registration = eventBus.addHandler(SendNewCourseEvent.TYPE, this);
		eventBusRegistration.put(SendNewCourseEvent.TYPE, registration);
		
		eventBusRegistration.put(SendEditCourseEvent.TYPE, eventBus.addHandler(SendEditCourseEvent.TYPE, this));
		eventBusRegistration.put(SendRemoveCourseEvent.TYPE, eventBus.addHandler(SendRemoveCourseEvent.TYPE, this));
		eventBusRegistration.put(SendGetCourseListEvent.TYPE, eventBus.addHandler(SendGetCourseListEvent.TYPE, this));
		
	}
	
	@Override
	public void onSendNewCourse(SendNewCourseEvent evt)
	{
		SendNewCourseAction action = evt.getAction();
		NewCourseActionTranslatorImpl newActionTranslator = new NewCourseActionTranslatorImpl();
		JSONObject json = newActionTranslator.translateToJson(action);
		SendNewCourseCallback newCallback = new SendNewCourseCallback(eventBus);
		
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.NEW_COURSE, newCallback, json);
		request.send();
	}
	
	@Override
	public void onSendEditCourse(SendEditCourseEvent evt)
	{
		SendEditCourseAction action = evt.getAction();
		EditCourseActionTranslatorImpl editActionTranslator = new EditCourseActionTranslatorImpl();
		JSONObject json = editActionTranslator.translateToJson(action);
		SendEditCourseCallback editCallback = new SendEditCourseCallback(eventBus);
		
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.EDIT_COURSE, editCallback, json);
		request.send();
	}
	
	@Override
	public void onSendRemoveCourse(SendRemoveCourseEvent evt)
	{
		SendRemoveCourseAction action = evt.getAction();
		RemoveCourseActionTranslatorImpl remActionTranslator = new RemoveCourseActionTranslatorImpl();
		JSONObject json = remActionTranslator.translateToJson(action);
		SendRemoveCourseCallback removeCallback = new SendRemoveCourseCallback(eventBus);
		
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.REMOVE_COURSE, removeCallback, json);
		request.send();
	}
	
	@Override
	public void onSendGetCourseList(SendGetCourseListEvent evt)
	{
		System.out.println("Recieved event fired to get courses. Sending network requests...");
		SendGetCourseListAction action = evt.getAction();
		GetCourseListActionTranslatorImpl courseListActionTranslator = new GetCourseListActionTranslatorImpl();
		JSONObject json = courseListActionTranslator.translateToJson(action);
		SendGetCourseListCallback courseListCallback = new SendGetCourseListCallback(eventBus);
		
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.GET_COURSE_LIST, courseListCallback, json);
		request.send();
	}
	
	
}
